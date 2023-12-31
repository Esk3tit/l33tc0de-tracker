import React from 'react';

type EditorFooterProps = {
    handleSaveSync: () => void,
    handleMarkSolved: (solve: boolean) => void,
    solved: boolean
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSaveSync, handleMarkSolved, solved }) => {

    return (
        <div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
            <div className='mx-5 my-[10px] flex justify-between w-full'>
                <div className='ml-auto flex items-center space-x-4'>
                    {solved ? (
                        <button
                            className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                            onClick={() => handleMarkSolved(false)}
                        >
                            Unmark Solved
                        </button>
                    ) : (
                        <button
                            className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                            onClick={() => handleMarkSolved(true)}
                        >
                            Mark Solved
                        </button>
                    )}
                    
                    <button className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg'
                        onClick={handleSaveSync}
                    >
                        Save & Sync
                    </button>
                </div>
            </div>
        </div>
    );
}
export default EditorFooter;