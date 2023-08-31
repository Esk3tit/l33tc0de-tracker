import React from 'react';
import { IoClose } from 'react-icons/io5';
import { ITabs } from '../Workspace/Playground/Playground';

type SolutionTabProps = {
    title: string;
    id: string;
    handleTabChange: (id: string) => void;
    deleteTab: (event: any, id: string) => void;
    activeTab: ITabs;
};

const SolutionTab:React.FC<SolutionTabProps> = ({ title, handleTabChange, id, deleteTab, activeTab }) => {
    
    return (
        <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-medium'
            onClick={() => handleTabChange(id)}
        >
            <div className={`flex items-center px-1 ${activeTab.id === id ? "border-b-2 border-white" : ""}`}>
                <div className='text-xs text-label-2 dark:text-dark-label-2'>{title}</div>
                <button
                    type='button'
                    className='bg-transparent rounded-lg text-sm ml-2 inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                    onClick={(e) => deleteTab(e, id)}
                >
                    <IoClose className='h-5 w-5' />
                </button>
            </div>
        </button>
    )
}
export default SolutionTab;