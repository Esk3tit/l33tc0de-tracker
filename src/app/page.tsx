'use client'

import Topbar from "@/components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { auth, firestore } from '@/firebase/firebase';
import { DBProblem } from '@/utils/types/problem';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { problemSets } from "@/data/problemSets";
import ProblemListDropdown from "@/components/Dropdowns/ProblemListDropdown";

export default function Home() {

  const [loading, setLoading] = useState(true);
  const allProblems = useGetProblems(setLoading);
  const userSolvedProblems = useGetSolvedProblems();

  const filterProblemsForProblemSet = (setId: string) => {
    const problemsInSet = problemSets.find(set => set.id === setId)!.problems;
    return allProblems.filter(problem => problemsInSet.has(problem.id));
  }

  const filterSolvedProblemsForProblemSet = (setId: string) => {
    const problemsInSet = problemSets.find(set => set.id === setId)!.problems;
    return userSolvedProblems.filter(problem => problemsInSet.has(problem));
  }

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar />
      <h1
        className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
        &ldquo;YOUR SUFFERING IS ONLY THE BEGINNING&rdquo; 😭
      </h1>

      <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
        {loading && (
          <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
            {[...Array(10)].map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>)}
        {!loading && (
          <div className='flex flex-col'>
            <h2 className='text-1xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mb-5'>Problem Sets</h2>
            {problemSets.map(problemSet => (
              <ProblemListDropdown
                key={problemSet.id}
                problemSet={problemSet}
                filterProblemsForProblemSet={filterProblemsForProblemSet}
                filterSolvedProblemsForProblemSet={filterSolvedProblemsForProblemSet}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

function useGetProblems(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const [problems, setProblems] = useState<DBProblem[]>([]);

  useEffect(() => {
      const getProblems = async () => {
          setLoading(true);
          const q = query(collection(firestore, 'problems'), orderBy('order', 'asc'));
          const querySnapshot = await getDocs(q);
          const temp: DBProblem[] = [];
          querySnapshot.forEach((doc) => {
              temp.push({ id: doc.id, ...doc.data() } as DBProblem);
          });
          setProblems(temp);
          setLoading(false);
      };

      getProblems();
  }, [setLoading]);

  return problems;
}

function useGetSolvedProblems() {
  const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
      const getSolvedProblems = async () => {
          const userRef = doc(firestore, 'users', user!.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
              const data = userSnap.data();
              if (data) {
                  setSolvedProblems(data.solvedProblems);
              }
          }
      };

      if (user) getSolvedProblems();
      if (!user) setSolvedProblems([]);
  }, [user]);

  return solvedProblems;
}