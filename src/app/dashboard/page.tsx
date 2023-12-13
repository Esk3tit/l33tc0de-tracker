'use client'

import useGetUserData from '@/hooks/useGetUserData';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type DashboardProps = {
    
};

const Dashboard: React.FC<DashboardProps> = () => {
    
    const { role } = useGetUserData();

    return (
        <>
            {role === 'admin' ? (
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-3xl font-bold'>Dashboard</h1>
                    <p className='text-lg'>Coming soon...</p>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center h-full'>
                    <Image src='/steamsad.gif' alt='Logo' height={500} width={500} />
                    <h2 className='text-3xl font-bold text-red-600'>Access Denied</h2>
                    <p>You must be an admin to view this page...</p>
                    <Link href='/'>
                        <button className='bg-brand-orange hover:bg-brand-orange-s text-white font-medium rounded-lg
                        text-sm px-5 py-2.5 text-center mt-5'>
                            Go Home
                        </button>
                    </Link>
                </div>
            )}
        </>
    )
}
export default Dashboard;