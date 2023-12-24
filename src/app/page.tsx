'use client'

import Topbar from "@/components/Topbar/Topbar";
import React from "react";
import ProblemSetAccordionList from "@/components/ProblemSetAccordionList/ProblemSetAccordionList";

export default function Home() {
  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar />
      <h1
        className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
        &ldquo;YOUR SUFFERING IS ONLY THE BEGINNING&rdquo; 😭
      </h1>
      <h2 className='text-1xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mb-5'>Problem Sets</h2>
      <ProblemSetAccordionList />
    </main>
  )
}