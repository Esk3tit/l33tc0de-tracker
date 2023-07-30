import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (mode: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({...prev, mode }));
    };
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputs((prev) => ({...prev, [name]: value}));
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password) return alert('Please fill in all fields');
        try {
            const user = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (!user) return;
            router.push('/');
        } catch(err: any) {
            alert(err.message);
        }
    };

    useEffect(() => {
        if (error) alert(error.message);
    }, [error]);

    return <form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
        <h3 className='text-xl font-medium text-white'>Sign in to L33tc0de Tracker</h3>
        <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                Email address
            </label>
            <input
                onChange={handleInputChange}
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
            <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
                Password
            </label>
            <input
                onChange={handleInputChange}
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
            {loading ? 'Loading...' : 'Sign in'}
        </button>
        <button type='button' className='flex w-full justify-end' onClick={() => handleClick('forgotPassword')}>
            <a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
                Forgot password?
            </a>
        </button>
        <div className='text-sm font-medium text-gray-300'>
            Don't have an account?{' '}
            <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick('register')}>
                Create account
            </a>
        </div>
    </form>
}
export default Login;