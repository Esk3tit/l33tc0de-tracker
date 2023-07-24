import React from 'react';

type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {

    return (
        <form className='space-y-6 px-6 pb-4'>
            <h3 className='text-xl font-medium text-white'>Register with L33tc0de Tracker</h3>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                    Email address
                </label>
                <input
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
                Register
            </button>
            
            <div className='text-sm font-medium text-gray-300'>
                Already have an account?{' '}
                <a href='#' className='text-blue-700 hover:underline'>
                    Sign In
                </a>
            </div>
        </form>
    );
}
export default Signup;