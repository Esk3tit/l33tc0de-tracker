'use client'

import useGetUserData from '@/hooks/useGetUserData';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { firestore } from "@/firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where, writeBatch } from "firebase/firestore";
import UsersTable from '@/components/UsersTable/UsersTable';
import { ModifiedUserRoles, UserRole } from '@/utils/types/user';
import Topbar from '@/components/Topbar/Topbar';

type DashboardProps = {
    
};

const Dashboard: React.FC<DashboardProps> = () => {
    
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

    const { role, userRoles, currUserRoles, setCurrUserRoles, loading, refetch, userLoading } = useGetUserRoles();

    const handleRoleChange = (idx: number, newRole: string) => {
        // Update the current user roles with modified user roles
        setCurrUserRoles(prev => ({
            ...prev,
            [userRoles[idx].uid]: newRole
        }));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const handleProblemSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newInputs = {
            ...inputs,
            order: Number(inputs.order)
        }

        await setDoc(doc(firestore, "problems", inputs.id), newInputs);
        alert("Document successfully written!");
    };

    const handleUserRoleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const modifiedUserRoles = userRoles.filter(userRole => currUserRoles[userRole.uid] !== userRole.role);
        console.log(modifiedUserRoles)
        
        if (modifiedUserRoles.length === 0) return;

        const batch = writeBatch(firestore);

        modifiedUserRoles.forEach(({ uid }) => {
            const userRef = doc(firestore, "users", uid);
            batch.update(userRef, {
                role: currUserRoles[uid]
            });
        })

        await batch.commit();

        refetch();
    }

    return (
        <main className='bg-dark-layer-2 min-h-screen'>
            <Topbar adminOnlyPage />
            {role === 'admin' ? (
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
                    <div className='flex flex-row items-start justify-evenly w-full'>
                        <form className="p-6 flex flex-col max-w-sm gap-3 bg-zinc-300" onSubmit={handleProblemSubmit}>
                            <input onChange={handleInputChange} type="text" placeholder="problem id" name="id" />
                            <input onChange={handleInputChange} type="text" placeholder="title" name="title" />
                            <input onChange={handleInputChange} type="text" placeholder="difficulty" name="difficulty" />
                            <input onChange={handleInputChange} type="text" placeholder="category" name="category" />
                            <input onChange={handleInputChange} type="text" placeholder="videoId?" name="videoId" />
                            <input onChange={handleInputChange} type="text" placeholder="link?" name="link" />
                            <input onChange={handleInputChange} type="text" placeholder="order" name="order" />
                            <button type="submit" className="bg-lime-700">Submit to Firestore DB</button>
                        </form>
                        <form onSubmit={handleUserRoleSubmit}>
                            <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[400px] mx-auto'>
                                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
                                    <tr>
                                        <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                            User
                                        </th>
                                        <th scope='col' className='px-3 py-3 w-0 font-medium'>
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <UsersTable
                                    userRoles={userRoles}
                                    loading={loading}
                                    handleRoleChange={handleRoleChange}
                                    currUserRoles={currUserRoles}
                                />
                            </table>
                            <button disabled={loading} type='submit' className="bg-lime-700">Apply Changes</button>
                        </form>
                    </div>
                </div>
            ) : (
                <>
                    {!userLoading ? (
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
                    ) : (
                        <div className='bg-dark-layer-2 min-h-screen text-3xl font-bold flex flex-col items-center justify-center h-full'>
                            <Image src='/steamsad.gif' alt='Logo' height={500} width={500} />
                            <h2 className='text-3xl font-bold text-red-600'>Loading...</h2>
                            <p>Just a moment...</p>
                        </div>
                    )}
                </>
            )}
        </main>
    )
}
export default Dashboard;

function useGetUserRoles() {
    const [loading, setLoading] = useState(false);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);
    const { uid, role, userLoading } = useGetUserData();
    const [currUserRoles, setCurrUserRoles] = useState<ModifiedUserRoles>({});
    const [refresh, setRefresh] = useState({});
    const refetch = () => setRefresh({});

    useEffect(() => {
        const getUserRoles = async () => {
            setLoading(true);
            const q = query(collection(firestore, 'users'), where("uid", "!=", uid));
            const querySnapshot = await getDocs(q);
            const temp: UserRole[] = [];
            querySnapshot.forEach((doc) => {
                temp.push({ uid: doc.data().uid, displayName: doc.data().displayName, role: doc.data().role } as UserRole);
            });
            setUserRoles(temp);
            setCurrUserRoles(temp.reduce((acc: ModifiedUserRoles, user: UserRole) => {
                acc[user.uid] = user.role;
                return acc;
            }, {}))
            setLoading(false);
        };

        if (uid) getUserRoles();
    }, [uid, refresh]);

    return { role, userRoles, currUserRoles, setCurrUserRoles, loading, refetch, userLoading };
}