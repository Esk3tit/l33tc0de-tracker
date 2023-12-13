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
import { usePathname, useRouter } from 'next/navigation';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';

type TopbarProps = {
    problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {

    const [user] = useAuthState(auth);

    const setAuthModalState = useSetRecoilState(authModalState);
    const pathname = usePathname();
    const router = useRouter();

    const handleProblemChange = (isForward: boolean) => {
        const pid = pathname.split("/")[2];
        const { order } = problems[pid] as Problem;
        const direction = isForward ? 1 : -1;
        const nextProblemOrder = order + direction;
        const nextProblemKey = Object.keys(problems).find(key => (problems[key] as Problem).order === nextProblemOrder);

        // Wrap around for first and last problems
        if (isForward && !nextProblemKey) {
            const firstProblemKey = Object.keys(problems).find(key => (problems[key] as Problem).order === 1);
            router.push(`/problems/${firstProblemKey}`);
        } else if (!isForward && !nextProblemKey) {
            const lastProblemKey = Object.keys(problems).find(key => (problems[key] as Problem).order === Object.keys(problems).length);
            router.push(`/problems/${lastProblemKey}`);
        } else {
            router.push(`/problems/${nextProblemKey}`);
        }
    }

    return (
        <nav className='relative flex w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
            <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
                <Link href='/' className='flex-1'>
                    <Image src='/steamhappy.png' alt='Logo' height={100} width={100} />
                </Link>

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

                <div className='flex items-center space-x-4 flex-1 justify-end'>
                    <div>
                        <a
                            href='https://www.buymeacoffee.com/burakorkmezz'
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
                            <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded'>Dashboard</button>
                            <div className='cursor-pointer group relative'>
                                <img src='/avatar.png' alt='user profile avatar' className='h-8 w-8 rounded-full' />
                                <div
                                    className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
                                        transition-all duration-300 ease-in-out'
                                >
                                    <p className='text-sm'>{user.email}</p>
                                </div>
                            </div>
                            <Logout />
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