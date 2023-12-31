import { authModalState } from '@/atoms/authModalAtom';
import { auth, firestore } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

type SignupProps = {

};

const options: any = { position: 'top-center', autoClose: 3000, theme: 'dark' };

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, mode: "login" }));
    };
    const [inputs, setInputs] = useState({email: '', displayName: '', password: ''});
    const router = useRouter();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputs((prev) => ({...prev, [name]: value}));
    };
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.displayName) return toast.error('Please fill in all fields', options);
        try {
            toast.loading('Creating user account...', { position: 'top-center', theme: 'dark', toastId: 'loadingToast' });
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) return;

            const userData = {
                uid: newUser.user.uid,
                email: newUser.user.email,
                displayName: inputs.displayName,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                likedProblems: [],
                dislikedProblems: [],
                solvedProblems: [],
                starredProblems: [],
                role: 'user',
            }

            await setDoc(doc(firestore, 'users', newUser.user.uid), userData);
            router.push('/');
        } catch(err: any) {
            toast.error(err.message, options);
        } finally {
            toast.dismiss('loadingToast');
        }
    };

    useEffect(() => {
        if (error) toast.error(error.message, options);
    }, [error]);

    return (
        <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
            <h3 className='text-xl font-medium text-white'>Register with L33tc0de Tracker</h3>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                    Email address
                </label>
                <input
                    onChange={handleChangeInput}
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@domain.com'
                />
            </div>

            <div>
                <label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
                    Display Name
                </label>
                <input
                    onChange={handleChangeInput}
                    id='displayName'
                    name='displayName'
                    type='displayName'
                    autoComplete='displayName'
                    required
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='Joe Mama'
                />
            </div>

            <div>
                <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
                    Password
                </label>
                <input
                    onChange={handleChangeInput}
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='password'
                    required
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                />
            </div>

            <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
                {loading ? 'Loading...' : 'Register'}
            </button>
            
            <div className='text-sm font-medium text-gray-300'>
                Already have an account?{' '}
                <a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
                    Sign In
                </a>
            </div>
        </form>
    );
}
export default Signup;