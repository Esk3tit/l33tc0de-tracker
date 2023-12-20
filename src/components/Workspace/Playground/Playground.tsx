import React, { useState, useEffect } from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/types/problem';
import { auth, firestore } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastOptions, toast } from 'react-toastify';
import { usePathname } from 'next/navigation';
import { arrayRemove, arrayUnion, collection, doc, getDocs, query, updateDoc, where, writeBatch } from 'firebase/firestore';
import useLocalStorage from '@/hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import useGetUsersDataOnProblem from '@/hooks/useGetUsersDataOnProblem';

type PlaygroundProps = {
    problem: Problem,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: () => void,
    solved: boolean
};

const options: ToastOptions = { position: 'top-center', autoClose: 3000, theme: 'dark' };
const SYNC_INTERVAL = 300000; // 5 minutes
const NOTIFICATION_OFFSET = 10000; // 10 seconds

export interface ISettings {
    fontSize: string;
    settingsModalIsOpen: boolean;
    dropdownIsOpen: boolean;
}

export interface ITabs {
    id: string;
    title: string;
    code: string;
    deleted: boolean;
    timestamp: number;
}

export interface UnifiedTabs extends ITabs {
    uid: string;
    pid: string;
}

export interface LocalStorageMap {
    [key: string]: UnifiedTabs;
}

const Playground:React.FC<PlaygroundProps> = ({ problem, setSuccess, solved, refetch }) => {
    const generateDefaultTab = () => {
        const newTab = {
            id: uuidv4(),
            title: "New New Solution (1)",
            code: problem.starterCode,
            deleted: false,
            timestamp: Date.now()
        }
        return newTab;
    }

    const defaultTab = generateDefaultTab()
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    let [userCode, setUserCode] = useState<string>(problem.starterCode);
    const [fontSize, setFontSize] = useLocalStorage("font-size", "16px");
    const [settings, setSettings] = useState<ISettings>({
        fontSize: fontSize,
        settingsModalIsOpen: false,
        dropdownIsOpen: false,
    });
    const [tabs, setTabs] = useState<ITabs[]>([]);
    const [activeTab, setActiveTab] = useState<ITabs>(() => (defaultTab));
    
    const { user, trueUid, loading } = useGetTrueUid();
    console.log(trueUid)
    const pathname = usePathname();
    const pid: string = pathname.split("/")[2];

    const handleMarkSolved = async (solve: boolean) => {
        if (!user) {
			toast.error("Please login to mark problem as solved", options);
			return;
		}
		try {
            if (solve) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 4000);
    
                const userRef = doc(firestore, "users", user.uid);
                await updateDoc(userRef, {
                    solvedProblems: arrayUnion(pid),
                });
                // setSolved(true);
            } else {
                const userRef = doc(firestore, "users", user.uid);
                await updateDoc(userRef, {
                    solvedProblems: arrayRemove(pid),
                });
                // setSolved(false);
            }
            console.log("refetching")
            refetch();
        } catch (error: any) {
			console.log(error.message);
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", options);
			} else {
				toast.error(error.message, options);
			}
		}
    }

    // Get tabs from local storage
    const getTabsFromLocalStorage = (): UnifiedTabs[] => {
        const tabs: UnifiedTabs[] = Object.keys(localStorage).filter(key => key.startsWith(`code#${trueUid}-${pid}~`)).map(tab => {
            const tabData = JSON.parse(localStorage.getItem(tab)!);
            return {
                id: tabData.id,
                uid: user!.uid,
                pid: pid,
                title: tabData.title,
                code: tabData.code,
                deleted: tabData.deleted,
                timestamp: tabData.timestamp
            }
        });
        return tabs;
    }

    // Get tabs from firebase
    const getTabsFromFirebase = async (): Promise<UnifiedTabs[]> => {
        // Tabs in tabs collection have user id to identify which tabs belong to which user
        const q = query(collection(firestore, "tabs"), where("uid", "==", user!.uid), where("pid", "==", pid));
        const querySnapshot = await getDocs(q);
        const tabs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as UnifiedTabs));
        return tabs;
    }

    const handleSaveSync = async () => {
        try {
            mergeSyncData().then(mergedTabs => {
                if(mergedTabs && mergedTabs.length) {
                    const currTab: ITabs | undefined = mergedTabs.find(tab => tab.id === activeTab.id);
                    setUserCode(currTab && currTab.code ? currTab.code : problem.starterCode);
                    setTabs(mergedTabs);
                }
            });
        } catch (error: any) {
            if(error.message.startsWith("AssertionError")) {
                toast.error("Incorrect! Some tests failed!", options);
            } else {
                toast.error(error.message, options);
            }
        }
    }

    const handleTabChange = (id: string) => {
        const currTab = tabs.find(tab => tab.id === id);
        setActiveTab(currTab!);
        setUserCode(currTab!.code);
    }

    const mergeTabsBasedOnTimestamp = (localStorageTabs: UnifiedTabs[], firestoreTabs: UnifiedTabs[]): UnifiedTabs[] => {
        const mergedTabs: UnifiedTabs[] = [];
        const localStorageMap: LocalStorageMap = {};

        // Create a map for local storage tabs
        localStorageTabs.forEach(tab => {
            localStorageMap[tab.id] = tab;
        });

        // Merge based on timestamp for firestore tabs that exist in local storage
        firestoreTabs.forEach(firestoreTab => {
            const localStorageTab = localStorageMap[firestoreTab.id];

            if (localStorageTab) {
                // If the tab exists in both Firestore and local storage, compare timestamps
                if (firestoreTab.timestamp >= localStorageTab.timestamp || (firestoreTab.deleted && !localStorageTab.deleted)) {
                    mergedTabs.push(firestoreTab);
                } else {
                    mergedTabs.push(localStorageTab);
                }
                // Remove the tab from localStorageMap so we don't process it again
                delete localStorageMap[firestoreTab.id];
            } else {
                // If the tab exists only in Firestore, add it to the merged list
                mergedTabs.push(firestoreTab);
            }
        });

        // Add any remaining tabs that exist only in local storage
        Object.values(localStorageMap).forEach(localStorageTab => {
            mergedTabs.push(localStorageTab);
        });

        return mergedTabs;
    }

    const updateTabsInLocalStorage = (tabs: UnifiedTabs[], expiredTabIds: string[]) => {
        // Set/save tabs in local storage
        tabs.forEach(tab => {
            const tabData: ITabs = {
                id: tab.id,
                title: tab.title,
                code: tab.code,
                deleted: tab.deleted,
                timestamp: tab.timestamp
            }
            localStorage.setItem(`code#${trueUid}-${pid}~${tabData.id}`, JSON.stringify(tabData));
        });

        // Clear expired tabs from local storage
        expiredTabIds.forEach(tabId => {
            localStorage.removeItem(`code#${trueUid}-${pid}~${tabId}`);
        });
    }

    const updateTabsInFirestore = async (tabs: UnifiedTabs[], expiredTabIds: string[]) => {
        const batch = writeBatch(firestore);

        // Save tabs in firestore
        tabs.forEach(tab => {
            const tabRef = doc(firestore, 'tabs', tab.id);
            batch.set(tabRef, tab);
        });

        // Clear expired tabs from firestore
        expiredTabIds.forEach(tabId => {
            const tabRef = doc(firestore, 'tabs', tabId);
            batch.delete(tabRef);
        });

        await batch.commit();
    }

    const mergeSyncData = async () => {
        if(loading) {
            toast.info("Logging in...", options);
            return;
        } else if(!user) {
            toast.warning("You must be logged in to save and sync with the cloud.", options);
            return;
        }

        const localStorageTabs = getTabsFromLocalStorage();
        const firestoreTabs = await getTabsFromFirebase();

        let mergedTabs = mergeTabsBasedOnTimestamp(localStorageTabs, firestoreTabs);

        // Clean up expired tabs
        const currTime = Date.now();
        const threshold = 30 * 1000; // 30 seconds
        const expiredTabs: string[] = [];

        mergedTabs = mergedTabs.filter(tab => {
            // If soft deleted tab is older than threshold, remove it
            if (tab.deleted && (currTime - tab.timestamp > threshold)) {
                expiredTabs.push(tab.id);
                return false;
            }
            return true;
        });

        // Update firestore and local storage with merged tabs
        await updateTabsInFirestore(mergedTabs, expiredTabs);
        updateTabsInLocalStorage(mergedTabs, expiredTabs);
        toast.success("Tabs successfully saved and synced to the cloud!", options);
        return mergedTabs;
    }

    // Set up intervals
    useEffect(() => {
        const syncInterval = setInterval(async () => {
            if(user) {
                // Notify user 10 secs before sync
                setTimeout(() => {
                    toast.info("Syncing tabs with the cloud in 10 seconds...", options);
                }, SYNC_INTERVAL - NOTIFICATION_OFFSET);

                mergeSyncData().then(mergedTabs => {
                    if(mergedTabs && mergedTabs.length) {
                        const currTab: ITabs | undefined = mergedTabs.find(tab => tab.id === activeTab.id);
                        setUserCode(currTab && currTab.code ? currTab.code : problem.starterCode);
                        setTabs(mergedTabs);
                    }
                });;
            }
        }, SYNC_INTERVAL);

        return () => {
            clearInterval(syncInterval)
        };
    }, [user]);

    // Fetch all tabs but only the code from active tab (first tab by default)
    useEffect(() => {
        mergeSyncData().then(mergedTabs => {
            console.log(`mergedTabs: ${mergedTabs}, loading: ${loading}, user: ${user}`)
            if(!loading && user && mergedTabs && mergedTabs.length) {
                // Sort tabs
                mergedTabs.sort((a, b) => a.timestamp - b.timestamp);
                const currTab: ITabs = mergedTabs[0];
                setUserCode(currTab.code);
                setTabs(mergedTabs);
                setActiveTab(currTab);
            } else if (!loading && !user && tabs.length) {
                console.log("clearing tabs")
                resetTabs();
            } else if (!loading && ((!user && !mergedTabs && !tabs.length) || (user && mergedTabs && !mergedTabs.length))) {
                console.log("creating new tab")
                addTab();
            }
        });
    }, [pid, user, loading, problem.starterCode]);

    const onChange = (value: string) => {
        setUserCode(value);
        const tabData = {
            id: activeTab.id,
            title: activeTab.title,
            code: value,
            deleted: activeTab.deleted,
            timestamp: Date.now()
        }
        setTabs(prev => {
            const index = prev.findIndex(tab => tab.id === activeTab.id);
            prev[index] = tabData;
            return prev;
        });

        localStorage.setItem(`code#${trueUid}-${pid}~${activeTab.id}`, JSON.stringify(tabData));
    }

    const generateNewTabTitle = () => {
        const defaultNamedTabs = tabs.filter(tab => tab.title.startsWith("New Solution"));

        if (defaultNamedTabs.length === 0) {
            return "New Solution (1)";
        }

        const numbers = defaultNamedTabs.map(tab => {
            const match = tab.title.match(/\((\d+)\)/);
            return match ? parseInt(match[1], 10) : 0;
        });

        const newNumber = Math.max(...numbers) + 1;

        return `New Solution (${newNumber})`;
    };

    const addTab = () => {
        const newTab = {
            id: uuidv4(),
            title: generateNewTabTitle(),
            code: problem.starterCode,
            deleted: false,
            timestamp: Date.now()
        }
        setTabs(prev => [...prev, newTab]);
        setActiveTab(newTab);
        setUserCode(newTab.code);
        localStorage.setItem(`code#${trueUid}-${pid}~${newTab.id}`, JSON.stringify(newTab));
    }

    // Reset tabs back to default of just 1 tab when signed out
    const resetTabs = () => {
        const newTab = generateDefaultTab();
        setTabs([defaultTab]);
        setActiveTab(defaultTab);
        setUserCode(defaultTab.code);
        localStorage.setItem(`code#${trueUid}-${pid}~${newTab.id}`, JSON.stringify(newTab));
    }

    const deleteTab = (event: any, id: string) => {
        // Prevents the event from bubbling up and also registering click as active tab
        // since the close button is on the tab itself which can be clicked on to set as active tab
        event.stopPropagation();
        const nonDeletedTabs = tabs.filter(tab => !tab.deleted);
        if(nonDeletedTabs.length === 1) {
            toast.error("Cannot delete last tab!", options);
            return;
        }
        const deleteIndex = tabs.findIndex(tab => tab.id === id);

        // Update deleted flag in tabs
        const updatedTab = {
            ...tabs[deleteIndex],
            deleted: true,
            timestamp: Date.now()
        }

        // Replace tab with updated tab
        const newTabs = [...tabs];
        newTabs[deleteIndex] = updatedTab;
        setTabs(newTabs);
        
        // If the deleted tab is the active tab, switch to the next tab to the right
        if (id === activeTab.id) {
            // Find the index of the deleted tab in the list of non-deleted tabs
            const deleteIndexInNonDeleted = nonDeletedTabs.findIndex(tab => tab.id === id);

            // If the deleted tab is the last non-deleted tab, switch to the tab immediately to its left
            // Otherwise, switch to the tab immediately to its right
            const newActiveIndex = deleteIndexInNonDeleted === nonDeletedTabs.length - 1 ? deleteIndexInNonDeleted - 1 : deleteIndexInNonDeleted + 1;

            setActiveTab(nonDeletedTabs[newActiveIndex]);
            setUserCode(nonDeletedTabs[newActiveIndex].code);
        }
        
        // Update the local storage to reflect the soft delete
        localStorage.setItem(`code#${trueUid}-${pid}~${id}`, JSON.stringify(updatedTab));

        // Show undo toast for 15 seconds
        toast.info("Tab deleted! Click this toast to undo.", {
            ...options,
            autoClose: 15000,
            onClick: () => {
                // Create a new object with the updated properties
                const restoredTab = {
                    ...updatedTab,
                    deleted: false,
                    timestamp: Date.now()
                };

                // Create a new array with the updated tab
                const restoredTabs = [...newTabs];
                restoredTabs[deleteIndex] = restoredTab;

                // Update the state and local storage
                setTabs(restoredTabs);
                localStorage.setItem(`code#${trueUid}-${pid}~${id}`, JSON.stringify(restoredTab));
            },
        });
    }

    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav settings={settings} setSettings={setSettings} tabs={tabs} handleTabChange={handleTabChange}
                addTab={addTab} deleteTab={deleteTab} activeTab={activeTab}
            />

            <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={userCode}
                        theme={vscodeDark}
                        onChange={onChange}
                        extensions={[python()]}
                        style={{fontSize: settings.fontSize}}
                    />
                </div>
                <div className='w-full px-5 overflow-auto'>
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-sm font-medium leading-5 text-white'>Test Cases</div>
                            <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                        </div>
                    </div>

                    <div className="flex">
                        {problem.examples.map((example, index) => (
                            <div
                                className='mr-2 items-start mt-2'
                                key={example.id}
                                onClick={() => setActiveTestCaseId(index)}
                            >
                                <div className='flex flex-wrap items-center gap-y-4'>
                                    <div
                                        className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                                    ${activeTestCaseId === index ? "text-white" : "text-gray-500"}
                                `}
                                    >
                                        Case {index + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='font-semibold my-4'>
                        <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].inputText}
                        </div>
                        <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].outputText}
                        </div>
                    </div>
                </div>
            </Split>
            <EditorFooter solved={solved} handleMarkSolved={handleMarkSolved} handleSaveSync={handleSaveSync} />
        </div>
    )
}
export default Playground;

function useGetTrueUid() {
    const [user, loading] = useAuthState(auth);
    const [trueUid, setTrueUid] = useState<string | undefined>(undefined);

    useEffect(() => {
        if(!loading) {
            if (user) {
                setTrueUid(user.uid);
            } else {
                setTrueUid("local");
            }
        }
    }, [loading, user]);

    return { user, trueUid, loading };
}