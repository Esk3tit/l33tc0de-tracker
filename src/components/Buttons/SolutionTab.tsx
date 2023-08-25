import React from 'react';

type SolutionTabProps = {
    title: string;
    id: number;
    handleTabChange: (id: number) => void;
};

const SolutionTab:React.FC<SolutionTabProps> = ({ title, handleTabChange, id }) => {
    
    return (
        <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-medium'
            onClick={() => handleTabChange(id)}
        >
            <div className='flex items-center px-1'>
                <div className='text-xs text-label-2 dark:text-dark-label-2'>{title}</div>
            </div>
        </button>
    )
}
export default SolutionTab;