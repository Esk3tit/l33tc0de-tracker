import React, { useState } from 'react';
import ProblemsTable from '../ProblemsTable/ProblemsTable';
import { DBProblem, ProblemSet } from '@/utils/types/problem';

type ProblemListDropdownProps = {
    problemSet: ProblemSet;
    filterProblemsForProblemSet: (setId: string) => DBProblem[];
    filterSolvedProblemsForProblemSet: (setId: string) => string[];
};

const ProblemListDropdown:React.FC<ProblemListDropdownProps> = ({ problemSet, filterProblemsForProblemSet, filterSolvedProblemsForProblemSet }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [problems, setProblems] = useState<DBProblem[]>(filterProblemsForProblemSet(problemSet.id));
    const [solvedProblems, setSolvedProblems] = useState<Set<string>>(new Set(filterSolvedProblemsForProblemSet(problemSet.id)));

    const toggleDropdown = () => {
        if (!isOpen) {
            setProblems(filterProblemsForProblemSet(problemSet.id));
            setSolvedProblems(new Set(filterSolvedProblemsForProblemSet(problemSet.id)));        
        }
        setIsOpen(prev => !prev);
    }
    
    return (
        <>
            <div className="cursor-pointer flex flex-row items-center justify-between text-white border-solid border-2 rounded-md bg-neutral-700" onClick={toggleDropdown}>
                <img className='w-[50px] h-[50px]' src={problemSet.imageUrl} alt={problemSet.alt} />
                <h3 className='select-none'>{problemSet.title}</h3>
                <span className='mx-2 select-none'>{`${solvedProblems.size} / ${problems.length} solved`}</span>
            </div>
            <div className={`accordion-content ${isOpen ? 'accordion-open' : 'accordion-closed'}`}>
                <div className='border-solid border-2 rounded border-t-0 inside-accordion'>
                    <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
                        <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
                                <tr>
                                    <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                        Status
                                    </th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                        Title
                                    </th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                        Difficulty
                                    </th>

                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                        Category
                                    </th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                        Solution
                                    </th>
                                </tr>
                            </thead>
                            <ProblemsTable problemSetId={problemSet.id} problems={problems} solvedProblems={solvedProblems} />
                        </table>
                    </div>
                </div>
            </div>          
        </>
    )
}
export default ProblemListDropdown;