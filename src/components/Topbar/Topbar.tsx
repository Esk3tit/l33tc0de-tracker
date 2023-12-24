'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import useGetUserData from '@/hooks/useGetUserData';
import { problemSets } from '@/data/problemSets';
import { sideNavProblemSetsState } from '@/atoms/sideNavProblemSets';

type TopbarProps = {
    problemPage?: boolean;
    adminOnlyPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage, adminOnlyPage }) => {

    const [user] = useAuthState(auth);
    const { role } = useGetUserData();

    const setAuthModalState = useSetRecoilState(authModalState);
    const setSideNavProblemSetsModalState = useSetRecoilState(sideNavProblemSetsState);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const problemSetId = searchParams.get("set");
    const selectedSet = problemSets.find(set => set.id === problemSetId);

    const handleProblemChange = (isForward: boolean) => {
        const pid = pathname.split("/")[2];
        const { order } = problems[pid] as Problem;
        const selectedSetProblems = selectedSet ? Array.from(selectedSet.problems) : Object.keys(problems);

        const sortedProblemOrders = selectedSetProblems.map(pid => (problems[pid] as Problem).order).sort((a, b) => a - b);
        const currentProblemIndex = sortedProblemOrders.indexOf(order);

        // Get next problem order even if not consecutive order number
        const nextProblemIndex = isForward
            ? (currentProblemIndex + 1) % sortedProblemOrders.length // Wrap around to the start of the list if we're at the end
            : (currentProblemIndex - 1 + sortedProblemOrders.length) % sortedProblemOrders.length; // Wrap around to the end of the list if we're at the start

        const nextProblemOrder = sortedProblemOrders[nextProblemIndex];
        const nextProblemKey = selectedSetProblems.find(pid => (problems[pid] as Problem).order === nextProblemOrder);

        router.push(`/problems/${nextProblemKey}?set=${problemSetId}`);
    }

    return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
            <div className={`flex w-full items-center justify-between ${!problemPage ? "mx-auto" : ""}`}>
                <div className='flex justify-between w-[300px]'>
                    <Link href='/' className='flex-1'>
                        <Image src='/steamhappy.png' alt='Logo' height={75} width={75} />
                    </Link>
                    {problemPage && (
                        <button
                            className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded hover:bg-dark-fill-2 flex'
                            onClick={() => setSideNavProblemSetsModalState((prev) => ({ ...prev, isOpen: true }))}
                        >
                            {selectedSet ? (
                                <>
                                <Image
                                    src={selectedSet.imageUrl}
                                    width={200}
                                    height={200}
                                    alt='problem set logo'
                                    className='object-contain max-w-full max-h-full'
                                /> <span>{selectedSet!.title}</span>
                                </>
                            ) : (
                                'Select Problem Set'
                            )}
                        </button>
                    )}
                </div>

                {problemPage && (
                    <div className='flex items-center gap-4 flex-1 justify-center'>
                        <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(false)}
                        >
                            <FaChevronLeft className='text-white' />
                        </div>
                        <Link href='/' className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
                            <div>
                                <BsList />
                            </div>
                            <p>Problems List</p>
                        </Link>
                        <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(true)}
                        >
                            <FaChevronRight className='text-white' />
                        </div>
                    </div>
                )}

                <div className='flex items-center space-x-2 justify-end'>
                    <div>
                        <a
                            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                            target='_blank'
                            rel='noreferrer'
                            className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                        >
                            Premium
                        </a>
                    </div>
                    {user && problemPage && <Timer />}
                    {user ? (
                        <>
                            {role === 'admin' && pathname !== "/dashboard" && (
                                <Link href='/dashboard'>
                                    <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded hover:bg-dark-fill-2'>Dashboard</button>
                                </Link>
                            )}
                            {role === 'admin' && pathname === "/dashboard" && (
                                <Link href='/'>
                                    <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded hover:bg-dark-fill-2'>Problems</button>
                                </Link>
                            )}
                            <div className='cursor-pointer group relative'>
                                <img src='/avatar.png' alt='user profile avatar' className='h-8 w-8 rounded-full' />
                                <div
                                    className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
                                        transition-all duration-300 ease-in-out'
                                >
                                    <p className='text-sm'>{user.email}</p>
                                </div>
                            </div>
                            <Logout adminOnlyPage={adminOnlyPage} />
                        </>
                    ) : (
                        <Link href='/auth' onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, mode: "login" }))}>
                            <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded'>Sign In</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
export default Topbar;