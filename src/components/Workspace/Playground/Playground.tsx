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
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import useLocalStorage from '@/hooks/useLocalStorage';

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
    id: number;
    title: string;
    code: string;
    timestamp?: number;
}

const Playground:React.FC<PlaygroundProps> = ({ problem, setSucess, setSolved }) => {
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    let [userCode, setUserCode] = useState<string>(problem.starterCode);
    const [fontSize, setFontSize] = useLocalStorage("font-size", "16px");
    const [settings, setSettings] = useState<ISettings>({
        fontSize: fontSize,
        settingsModalIsOpen: false,
        dropdownIsOpen: false,
    });
    const [tabs, setTabs] = useState<ITabs[]>([]);
    const [activeTab, setActiveTab] = useState<ITabs>({
        id: 0,
        title: "Solution 1",
        code: problem.starterCode
    });
    
    const [user] = useAuthState(auth);
    const pathname = usePathname();
    const pid: string = pathname.split("/")[2];

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

    const handleTabChange = (id: number) => {
        const currTab = tabs.find(tab => tab.id === id);
        setActiveTab(currTab!);
        setUserCode(currTab!.code);
    }

    // Fetch all tabs but only the code from active tab (first tab by default)
    // Might need to update dependency array if I can think of use case that would
    // warrant refetching all tab data
    // TODO: Add tab fetching from firestore for syncing if not in local storage LATER
    useEffect(() => {
        const tabs = Object.keys(localStorage).filter(key => key.startsWith(`code-${pid}~`)).map(tab => {
            const tabData = JSON.parse(localStorage.getItem(tab)!);
            return {
                id: +tabData.id,
                title: tabData.title,
                code: tabData.code,
                timestamp: tabData.timestamp
            }
        });
        // Sort tabs
        tabs.sort((a, b) => a.timestamp - b.timestamp);

        if(user) {
            const currTab = tabs.find(tab => tab.id === activeTab.id);
            setUserCode(currTab && currTab.code ? currTab.code : problem.starterCode);
            setTabs(tabs.length ? tabs : [{ id: 0, title: "Solution 1", code: problem.starterCode }]);
        } else {
            setUserCode(problem.starterCode);
            setTabs([{ id: 0, title: "Solution 1", code: problem.starterCode }]);
        }
    }, [pid, user, problem.starterCode]);

    const onChange = (value: string) => {
        setUserCode(value);
        const tabData = {
            id: activeTab.id,
            title: activeTab && activeTab.title ? activeTab.title : `Solution ${activeTab.id + 1}`,
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

    const addTab = () => {
        const newTab = {
            id: tabs.length,
            title: `Solution ${tabs.length + 1}`,
            code: problem.starterCode,
            timestamp: Date.now()
        }
        setTabs(prev => [...prev, newTab]);
        setActiveTab(newTab);
        localStorage.setItem(`code-${pid}~${newTab.id}`, JSON.stringify(newTab));
    }

    const deleteTab = () => {
        if(tabs.length === 1) {
            toast.error("Cannot delete last tab", options);
            return;
        }
        const newTabs = tabs.filter(tab => tab.id !== activeTab.id);
        setTabs(newTabs);
        setActiveTab(newTabs[newTabs.length - 1]);
        localStorage.removeItem(`code-${pid}~${activeTab.id}`);
    }

    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav settings={settings} setSettings={setSettings} tabs={tabs} handleTabChange={handleTabChange} />

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