'use client'

import Topbar from "@/components/Topbar/Topbar";
import React, { useEffect } from "react";
import ProblemSetAccordionList from "@/components/ProblemSetAccordionList/ProblemSetAccordionList";
import { auth } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import { useRouter } from "next/navigation";

export default function Home() {

  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const authModal = useRecoilValue(authModalState);

  useEffect(() => {
    if (user) {
      setAuthModalState((prev) => ({ ...prev, isOpen: false }));
    }
  }, [user]);

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar user={user} />
      <h1
        className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
        Remember to do spaced repetition of already solved problems!
      </h1>
      <h2 className='text-1xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mb-5'>Problem Sets</h2>
      {user ? 
        <ProblemSetAccordionList /> : 
        <div className="text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
          Please sign in to view problem sets
        </div>}
      {authModal.isOpen && <AuthModal />}
    </main>
  )
}