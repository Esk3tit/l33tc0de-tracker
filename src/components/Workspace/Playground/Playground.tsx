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
import { toast } from 'react-toastify';
import { usePathname } from 'next/navigation';
import { problems } from '@/utils/problems';
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where, writeBatch } from 'firebase/firestore';
import useLocalStorage from '@/hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

type PlaygroundProps = {
    problem: Problem,
    setSucess: React.Dispatch<React.SetStateAction<boolean>>,
    setSolved: React.Dispatch<React.SetStateAction<boolean>>
};

const options: any = { position: 'top-center', autoClose: 3000, theme: 'dark' };

export interface ISettings {
    fontSize: string;
    settingsModalIsOpen: boolean;
    dropdownIsOpen: boolean;
}

export interface ITabs {
    id: string;
    title: string;
    code: string;
    timestamp: number;
}

export interface FirestoreTabs extends ITabs {
    uid: string;
    pid: string;
}

export interface UnifiedTabs extends ITabs {
    uid?: string;
    pid?: string;
}

export interface LocalStorageMap {
    [key: string]: UnifiedTabs;
}

const Playground:React.FC<PlaygroundProps> = ({ problem, setSucess, setSolved }) => {
    const defaultTab = { id: uuidv4(), title: "New Solution", code: problem.starterCode, timestamp: Date.now() };
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
    
    const [user] = useAuthState(auth);
    const pathname = usePathname();
    const pid: string = pathname.split("/")[2];

    // Get tabs from local storage
    const getTabsFromLocalStorage = (): UnifiedTabs[] => {
        const tabs: UnifiedTabs[] = Object.keys(localStorage).filter(key => key.startsWith(`code-${pid}~`)).map(tab => {
            const tabData = JSON.parse(localStorage.getItem(tab)!);
            return {
                id: tabData.id,
                uid: user ? user.uid : undefined,
                pid: pid,
                title: tabData.title,
                code: tabData.code,
                timestamp: tabData.timestamp
            }
        });
        // Sort tabs
        tabs.sort((a, b) => a.timestamp - b.timestamp);
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

    // TODO: Change to local save sync to DB
    const handleSubmit = async () => {
        if(!user) {
            toast.error("You must be logged in to submit", options);
            return;
        }

        // Oh right since code is in Python it won't work on JS stuff lol
        try {
            userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
            const cb = new Function(`return ${userCode}`)();
            const handler = problems[pid].handlerFunction;

            if (typeof handler === "function") {
                const success = handler(cb);
            
                if(success) {
                    toast.success("Correct! All tests passed!", options);
                    setSucess(true);
                    setTimeout(() => {
                        setSucess(false);
                    }, 4000);

                    const userRef = doc(firestore, 'users', user.uid);
                    await updateDoc(userRef, {
                        solvedProblems: arrayUnion(pid)
                    });
                    setSolved(true);
                }
            }
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
                // Firestore is source of truth, so if equal then use Firestore
                if (firestoreTab.timestamp >= localStorageTab.timestamp) {
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

    const updateTabsInLocalStorage = (tabs: UnifiedTabs[]) => {
        tabs.forEach(tab => {
            const tabData: ITabs = {
                id: tab.id,
                title: tab.title,
                code: tab.code,
                timestamp: tab.timestamp
            }
            localStorage.setItem(`code-${pid}~${tabData.id}`, JSON.stringify(tabData));
        });
    }

    const updateTabsInFirestore = async (tabs: UnifiedTabs[]) => {
        const batch = writeBatch(firestore);

        tabs.forEach(tab => {
            const tabRef = doc(firestore, 'tabs', tab.id);
            batch.set(tabRef, tab);
        });

        await batch.commit();
    }

    // Fetch all tabs but only the code from active tab (first tab by default)
    useEffect(() => {
        const mergeSyncData = async () => {
            const localStorageTabs = getTabsFromLocalStorage();
            const firestoreTabs = await getTabsFromFirebase();

            const mergedTabs = mergeTabsBasedOnTimestamp(localStorageTabs, firestoreTabs);

            // Update firestore and local storage with merged tabs
            if(user) {
                await updateTabsInFirestore(mergedTabs);
                updateTabsInLocalStorage(mergedTabs);
            }
            return mergedTabs;
        }

        mergeSyncData().then(mergedTabs => {
            if(user) {
                const currTab: ITabs | undefined = mergedTabs.find(tab => tab.id === activeTab.id);
                setUserCode(currTab && currTab.code ? currTab.code : problem.starterCode);
                setTabs(mergedTabs.length ? mergedTabs : [defaultTab]);
            } else {
                setUserCode(problem.starterCode);
                setTabs([defaultTab]);
            }
        });
    }, [pid, user, problem.starterCode]);

    const onChange = (value: string) => {
        setUserCode(value);
        const tabData = {
            id: activeTab.id,
            title: activeTab.title,
            code: value,
            timestamp: Date.now()
        }
        setTabs(prev => {
            const index = prev.findIndex(tab => tab.id === activeTab.id);
            prev[index] = tabData;
            return prev;
        });
        localStorage.setItem(`code-${pid}~${activeTab.id}`, JSON.stringify(tabData));
    }

    const generateNewTabTitle = () => {
        const defaultNamedTabs = tabs.filter(tab => tab.title.startsWith("New Solution"));

        if (defaultNamedTabs.length === 0) {
            return "New Solution";
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
            timestamp: Date.now()
        }
        setTabs(prev => [...prev, newTab]);
        setActiveTab(newTab);
        setUserCode(newTab.code);
        localStorage.setItem(`code-${pid}~${newTab.id}`, JSON.stringify(newTab));
    }

    const deleteTab = (event: any, id: string) => {
        // Prevents the event from bubbling up and also registering click as active tab
        // since the close button is on the tab itself which can be clicked on to set as active tab
        event.stopPropagation();
        if(tabs.length === 1) {
            toast.error("Cannot delete last tab", options);
            return;
        }
        const deleteIndex = tabs.findIndex(tab => tab.id === id);
        const newTabs = tabs.filter(tab => tab.id !== id);
        setTabs(newTabs);
        
        // If the deleted tab is the active tab, switch to the next tab to the right
        if (id === activeTab.id) {
            // If the deleted tab is the last tab, switch to the tab immediately to its left
            // Otherwise, switch to the tab immediately to its right
            const newActiveIndex = deleteIndex === newTabs.length ? deleteIndex - 1 : deleteIndex;
            setActiveTab(newTabs[newActiveIndex]);
            setUserCode(newTabs[newActiveIndex].code);
        }
        
        localStorage.removeItem(`code-${pid}~${id}`);
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
            <EditorFooter handleSubmit={handleSubmit} />
        </div>
    )
}
export default Playground;