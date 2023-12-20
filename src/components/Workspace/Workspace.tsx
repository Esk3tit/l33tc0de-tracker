'use client'

import React, { useEffect, useState } from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Confetti from 'react-confetti';
import useWindowSize from '@/hooks/useWindowSize';
import useGetUsersDataOnProblem from '@/hooks/useGetUsersDataOnProblem';

type WorkspaceProps = {
    problem: Problem
};

const Workspace:React.FC<WorkspaceProps> = ({ problem }) => {
    const {width, height} = useWindowSize();
    const [success, setSuccess] = useState(false);
    const { solved, refetch, liked, disliked, starred, setData } = useGetUsersDataOnProblem(problem.id);

    return <Split className='split' minSize={0}>
        <ProblemDescription
            problem={problem}
            solved={solved}
            liked={liked}
            disliked={disliked}
            starred={starred}
            setData={setData}
        />
        <div className='bg-dark-fill-2'>
            <Playground problem={problem} solved={solved} setSuccess={setSuccess} refetch={refetch} />
            {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
        </div>
    </Split>
}
export default Workspace;