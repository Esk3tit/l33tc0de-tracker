'use client'

import React, { useState, useEffect, createRef, MutableRefObject } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import YouTube from 'react-youtube';
import { DBProblem, ProblemSet } from '@/utils/types/problem';
import useCloseModal from '@/hooks/useCloseModal';

type ProblemsTableProps = {
    problems: DBProblem[];
    solvedProblems: Set<string>;
    problemSetId: string;
    withModal?: boolean;
    selectedSet: ProblemSet | undefined;
    pid: string | undefined;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ problems, solvedProblems, problemSetId, selectedSet, withModal, pid }) => {
    const [problemRefs, setProblemRefs] = useState<{[key: string]: MutableRefObject<any>}>({});

    useEffect(() => {
        setProblemRefs(problems.reduce((acc: {[key: string]: MutableRefObject<any>}, problem) => {
            acc[`${problemSetId}-${problem.id}`] = createRef();
            return acc;
        }, {}));
    }, [problems]);

    useEffect(() => {
        if (withModal && pid && problemSetId === selectedSet?.id && problemRefs[`${problemSetId}-${pid}`]) {
            problemRefs[`${problemSetId}-${pid}`].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [pid, selectedSet, problemRefs]);

    const [youtubePlayer, setYoutubePlayer] = useState({
        isOpen: false,
        videoId: '',
    });
    
    const closeModal = () => {
        setYoutubePlayer({ isOpen: false, videoId: '' });
    };

    const closeSideNavProblemSetsModal = useCloseModal();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleEsc);

        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            <tbody className='text-white'>
                {problems.map((problem, idx) => {
                    const difficultyColor = problem.difficulty === 'Easy' ? 'text-dark-green-s' : problem.difficulty === 'Medium' ? 'text-dark-yellow' : 'text-dark-pink';
                    return (
                        <tr ref={problemRefs[`${problemSetId}-${problem.id}`]} key={problem.id} className={`${(withModal && problem.id === pid) ? 'bg-gray-500' : idx % 2 === 1 ? 'bg-dark-layer-1' : ''}`}>
                            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                                {solvedProblems.has(problem.id) && <BsCheckCircle fontSize={18} width={18} />}
                            </th>
                            <td className='px-6 py-4'>
                                {problem.link ? (
                                    <>
                                        {withModal ? (
                                            <Link
                                                className={`hover:text-blue-600 cursor-pointer ${problem.id === pid ? 'text-blue-400' : ''}`}
                                                onClick={closeSideNavProblemSetsModal}
                                                href={problem.link}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                            >
                                                {problem.title}
                                            </Link>
                                        ) : (
                                            <Link
                                                className='hover:text-blue-600 cursor-pointer'
                                                href={problem.link}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                            >
                                                {problem.title}
                                            </Link>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {withModal ? (
                                            <Link
                                            className={`hover:text-blue-600 cursor-pointer ${problem.id === pid ? 'text-blue-800' : ''}`}
                                                onClick={closeSideNavProblemSetsModal}
                                                href={`/problems/${problem.id}?set=${problemSetId}`}
                                            >
                                                {problem.title}
                                            </Link>
                                        ) : (
                                            <Link
                                                className='hover:text-blue-600 cursor-pointer'
                                                href={`/problems/${problem.id}?set=${problemSetId}`}
                                            >
                                                {problem.title}
                                            </Link>
                                        )}
                                    </>
                                )}
                            </td>
                            <td className={`px-6 py-4 ${difficultyColor}`}>
                                {problem.difficulty}
                            </td>
                            <td className='px-6 py-4'>
                                {problem.category}
                            </td>
                            <td className='px-6 py-4'>
                                {problem.videoId ? (
                                    <AiFillYoutube fontSize={32} className='cursor-pointer hover:text-red-600'
                                        onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })}
                                    />
                                ) : (
                                    <p className='text-gray-400'>Coming soon</p>
                                )}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            {youtubePlayer.isOpen &&
                (
                    <tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center ' >
                        <div className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute' onClick={closeModal}></div>
                        <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
                            <div className='w-full h-full flex items-center justify-center relative'>
                                <div className='w-full relative'>
                                    <IoClose fontSize={"35"} className='cursor-pointer absolute -top-16 right-0'
                                        onClick={closeModal}
                                    />
                                    <YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[500px]' />
                                </div>
                            </div>
                        </div>
                    </tfoot>
                )
            }
        </>
    );
}
export default ProblemsTable;