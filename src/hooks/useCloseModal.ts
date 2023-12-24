import { sideNavProblemSetsState } from "@/atoms/sideNavProblemSets";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

function useCloseModal() {
    const setSideNavProblemSetsModalState = useSetRecoilState(sideNavProblemSetsState);

    const closeModal = () => {
        setSideNavProblemSetsModalState((prev) => ({...prev, isOpen: false}));
    };
    
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return closeModal;
}

export default useCloseModal;