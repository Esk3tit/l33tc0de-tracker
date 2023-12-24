import { firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { query, collection, orderBy, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function useGetProblems(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    const [problems, setProblems] = useState<DBProblem[]>([]);

    useEffect(() => {
        const getProblems = async () => {
            setLoading(true);
            const q = query(collection(firestore, 'problems'), orderBy('order', 'asc'));
            const querySnapshot = await getDocs(q);
            const temp: DBProblem[] = [];
            querySnapshot.forEach((doc) => {
                temp.push({ id: doc.id, ...doc.data() } as DBProblem);
            });
            setProblems(temp);
            setLoading(false);
        };

        getProblems();
    }, [setLoading]);

    return problems;
}

export default useGetProblems;