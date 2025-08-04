'use client'

import { sideNavProblemSetsState } from '@/atoms/sideNavProblemSets';
import SideNavProblemSetsModal from '@/components/Modals/SideNavProblemSetsModal';
import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { auth } from '@/firebase/firebase';
import useHasMounted from '@/hooks/useHasMounted';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import { notFound } from 'next/navigation';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';

type ProblemPageProps = {
    params: { pid: string }
};

const ProblemPage:React.FC<ProblemPageProps> = ({ params }) => {
    const [user, loading] = useAuthState(auth);
    const hasMounted = useHasMounted();
    const sideNavProblemSetsModal = useRecoilValue(sideNavProblemSetsState);

    if (!hasMounted || loading) return null;

    const { pid } = params;
    const problem: Problem = problems[pid];

    if (!problem) {
		notFound();
	}

    return <div>
        <Topbar problemPage user={user} />
        <Workspace problem={problem} />
        {sideNavProblemSetsModal.isOpen && <SideNavProblemSetsModal />}
    </div>
}
export default ProblemPage;

export async function generateStaticParams() {
    return Object.keys(problems).map(pid => ({
        pid
    }));
}