import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function useGetSolvedProblems(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getSolvedProblems = async () => {
            setLoading(true);
            const userRef = doc(firestore, 'users', user!.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const data = userSnap.data();
                if (data) {
                    setSolvedProblems(data.solvedProblems);
                }
            }
            setLoading(false);
        };

        if (user) getSolvedProblems();
        if (!user) setSolvedProblems([]);
    }, [user, setLoading]);

    return solvedProblems;
}

export default useGetSolvedProblems;