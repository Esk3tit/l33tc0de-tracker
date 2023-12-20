import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function useGetUsersDataOnProblem(problemId: string) {
    const [data, setData] = useState({ liked: false, disliked: false, starred: false, solved: false });
    const [user] = useAuthState(auth);
    const [refresh, setRefresh] = useState({});
    const refetch = () => setRefresh({});

    useEffect(() => {
        console.log('running effect')
        const getUsersDataOnProblem = async () => {
            const userRef = doc(firestore, 'users', user!.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const userData = userSnap.data();
                const { likedProblems, dislikedProblems, starredProblems, solvedProblems } = userData;
                setData({
                    liked: likedProblems.includes(problemId),
                    disliked: dislikedProblems.includes(problemId),
                    starred: starredProblems.includes(problemId),
                    solved: solvedProblems.includes(problemId),
                });
            }
        }

        if (user) getUsersDataOnProblem();

        return () => setData({ liked: false, disliked: false, starred: false, solved: false });

    }, [problemId, user, refresh]);

    return { ...data, setData, refetch };
}

export default useGetUsersDataOnProblem;