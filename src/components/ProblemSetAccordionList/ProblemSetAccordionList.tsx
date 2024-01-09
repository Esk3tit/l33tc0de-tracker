import { problemSets } from '@/data/problemSets';
import useGetProblems from '@/hooks/useGetProblems';
import useGetSolvedProblems from '@/hooks/useGetSolvedProblems';
import React, { useState } from 'react';
import ProblemListDropdown from '../Dropdowns/ProblemListDropdown';
import { usePathname, useSearchParams } from 'next/navigation';

type ProblemSetAccordionListProps = {
    withModal?: boolean;
};

const ProblemSetAccordionList:React.FC<ProblemSetAccordionListProps> = ({ withModal }) => {
    const pathname = usePathname();
    const pid = pathname.split("/")[2];
    const searchParams = useSearchParams();
    const problemSetId = searchParams.get("set");
    const [loadingProblems, setLoadingProblems] = useState(true);
    const [loadingSolved, setLoadingSolved] = useState(true);
    const allProblems = useGetProblems(setLoadingProblems);
    const userSolvedProblems = useGetSolvedProblems(setLoadingSolved);

    const filterProblemsForProblemSet = (setId: string) => {
        const problemsInSet = problemSets.find(set => set.id === setId)!.problems;
        return allProblems.filter(problem => problemsInSet.has(problem.id));
    }

    const filterSolvedProblemsForProblemSet = (setId: string) => {
        const problemsInSet = problemSets.find(set => set.id === setId)!.problems;
        return userSolvedProblems.filter(problem => problemsInSet.has(problem));
    }

    return (
        <div className='relative mx-auto px-6 pb-10 flex-grow overflow-auto'>
            {(loadingProblems || loadingSolved) && (
                <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
                    {[...Array(10)].map((_, i) => (
                        <LoadingSkeleton key={i} />
                    ))}
                </div>)}
            {(!loadingProblems && !loadingSolved) && (
                <div className='flex flex-col'>
                    {problemSets.map(problemSet => (
                        <ProblemListDropdown
                            key={problemSet.id}
                            problemSet={problemSet}
                            filterProblemsForProblemSet={filterProblemsForProblemSet}
                            filterSolvedProblemsForProblemSet={filterSolvedProblemsForProblemSet}
                            withModal
                            pid={pid}
                            problemSetId={problemSetId}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default ProblemSetAccordionList;

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center gap-8 mt-4'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};