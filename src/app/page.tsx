'use client'

import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    difficulty: "",
    category: "",
    videoId: "",
    link: "",
    order: 0,
    likes: 0,
    dislikes: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newInputs = {
      ...inputs,
      order: Number(inputs.order)
    }

    await setDoc(doc(firestore, "problems", inputs.id), newInputs);
    alert("Document successfully written!");
  };

  console.log(inputs);

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar />
      <h1
        className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
        &ldquo; PRACTICE MAKES PERFECT &rdquo; 👇
      </h1>

      <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
        {loading && (
          <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
            {[...Array(10)].map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>)}
        <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
          {!loading && (
            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
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
          )}
          <ProblemsTable setLoading={setLoading} />
        </table>
      </div>

      {/* TEMP FORM */}
      <form className="p-6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text" placeholder="problem id" name="id" />
        <input onChange={handleInputChange} type="text" placeholder="title" name="title" />
        <input onChange={handleInputChange} type="text" placeholder="difficulty" name="difficulty" />
        <input onChange={handleInputChange} type="text" placeholder="category" name="category" />
        <input onChange={handleInputChange} type="text" placeholder="videoId?" name="videoId" />
        <input onChange={handleInputChange} type="text" placeholder="link?" name="link" />
        <input onChange={handleInputChange} type="text" placeholder="order" name="order" />
        <button type="submit" className="bg-white">Submit to Firestore DB</button>
      </form>
    </main>
  )
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};