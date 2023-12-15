import { auth, firestore } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserDBData } from '@/utils/types/user';

function useGetUserData() {
    const [user, loading] = useAuthState(auth);
    const [userData, setUserData] = useState<UserDBData>({} as UserDBData);

    useEffect(() => {
        const getUsersData = async () => {
            const userRef = doc(firestore, 'users', user!.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const _userData = userSnap.data() as UserDBData;
                setUserData({
                    ..._userData
                });
            }
        }

        if (user) getUsersData();

    }, [user]);

    return { ...userData, userLoading: loading };
}

export default useGetUserData;