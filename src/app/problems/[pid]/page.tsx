'use client'

import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import useHasMounted from '@/hooks/useHasMounted';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import { notFound } from 'next/navigation';
import React from 'react';

type ProblemPageProps = {
    params: { pid: string }
};

const ProblemPage:React.FC<ProblemPageProps> = ({ params }) => {
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    const { pid } = params;
    const problem: Problem = problems[pid];

    if (!problem) {
		notFound();
	}

    return <div>
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