import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function useGetSolvedProblems() {
    const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getSolvedProblems = async () => {
            const userRef = doc(firestore, 'users', user!.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const data = userSnap.data();
                if (data) {
                    setSolvedProblems(data.solvedProblems);
                }
            }
        };

        if (user) getSolvedProblems();
        if (!user) setSolvedProblems([]);
    }, [user]);

    return solvedProblems;
}

export default useGetSolvedProblems;