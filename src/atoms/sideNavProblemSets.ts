'use client'

import { atom } from "recoil";

type SideNavProblemSetsState = {
    isOpen: boolean;
};

const initialSideNavProblemSetsState: SideNavProblemSetsState = {
    isOpen: false,
};

export const sideNavProblemSetsState = atom<SideNavProblemSetsState>({
    key: "sideNavProblemSetsState",
    default: initialSideNavProblemSetsState,
});