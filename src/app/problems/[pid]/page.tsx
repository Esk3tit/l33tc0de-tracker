'use client'

import { sideNavProblemSetsState } from '@/atoms/sideNavProblemSets';
import SideNavProblemSetsModal from '@/components/Modals/sideNavProblemSetsModal';
import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import useHasMounted from '@/hooks/useHasMounted';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import { notFound } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';

type ProblemPageProps = {
    params: { pid: string }
};

const ProblemPage:React.FC<ProblemPageProps> = ({ params }) => {
    const hasMounted = useHasMounted();
    const sideNavProblemSetsModal = useRecoilValue(sideNavProblemSetsState);

    if (!hasMounted) return null;

    const { pid } = params;
    const problem: Problem = problems[pid];

    if (!problem) {
		notFound();
	}

    return <div>
        {sideNavProblemSetsModal.isOpen && <SideNavProblemSetsModal />}
        <Topbar problemPage />
        <Workspace problem={problem} />
    </div>
}
export default ProblemPage;

export async function generateStaticParams() {
    return Object.keys(problems).map(pid => ({
        pid
    }));
}