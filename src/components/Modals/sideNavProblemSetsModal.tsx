import { sideNavProblemSetsState } from '@/atoms/sideNavProblemSets';
import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';
import ProblemSetAccordionList from '../ProblemSetAccordionList/ProblemSetAccordionList';

type sideNavProblemSetsModalProps = {
    
};

const sideNavProblemSetsModal:React.FC<sideNavProblemSetsModalProps> = () => {
    
    const closeModal = useCloseModal();

    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60' onClick={closeModal}></div>
            <div className='fixed inset-y-0 left-0 z-30 bg-dark-layer-2 w-1/3'>
                <div className='flex flex-col'>
                    <div className='flex justify-between p-2'>
                        <h3 className='text-1xl font-bold text-white'>Problem Sets</h3>
                        <button
                            type='button'
                            className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                            onClick={closeModal}
                        >
                            <IoClose className='h-5 w-5' />
                        </button>
                    </div>
                    <ProblemSetAccordionList />
                </div>
            </div>
        </>
    )
}
export default sideNavProblemSetsModal;

// const LoadingSkeleton = () => {
// 	return (
// 		<div className='flex items-center gap-8 mt-4'>
// 			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
// 			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
// 			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
// 			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
// 			<span className='sr-only'>Loading...</span>
// 		</div>
// 	);
// };

function useCloseModal() {
    const setSideNavProblemSetsModalState = useSetRecoilState(sideNavProblemSetsState);

    const closeModal = () => {
        setSideNavProblemSetsModalState((prev) => ({...prev, isOpen: false}));
    };
    
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return closeModal;
}