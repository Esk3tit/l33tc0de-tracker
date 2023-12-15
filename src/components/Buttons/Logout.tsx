import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';

type LogoutProps = {
    adminOnlyPage?: boolean;
};

const Logout:React.FC<LogoutProps> = ({ adminOnlyPage }) => {
    
    const [signOut, loading, error] = useSignOut(auth);
    const router = useRouter();

    const handleLogout = () => {
        if (adminOnlyPage) router.push('/');

        signOut();
    };

    return <button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
        <FiLogOut />
    </button>
}
export default Logout;