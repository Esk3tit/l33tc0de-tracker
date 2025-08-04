import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import ProblemSetAccordionList from '../ProblemSetAccordionList/ProblemSetAccordionList';
import useCloseModal from '@/hooks/useCloseModal';

type SideNavProblemSetsModalProps = {
    
};

const SideNavProblemSetsModal:React.FC<SideNavProblemSetsModalProps> = () => {
    
    const closeModal = useCloseModal();

    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-20' onClick={closeModal}></div>
            <div className='fixed inset-y-0 left-0 z-30 bg-dark-layer-2 w-1/3'>
                <div className='flex flex-col h-full gap-4'>
                    <div className='flex justify-between items-center p-4'>
                        <h3 className='text-3xl font-bold text-white'>Problem Sets</h3>
                        <button
                            type='button'
                            className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                            onClick={closeModal}
                        >
                            <IoClose className='h-5 w-5' />
                        </button>
                    </div>
                    <ProblemSetAccordionList withModal />
                </div>
            </div>
        </>
    )
}
export default SideNavProblemSetsModal;

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