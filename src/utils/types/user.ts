export type UserDBData = {
    uid: string;
    email: string;
    displayName: string;
    createdAt: number;
    updatedAt: number;
    likedProblems: string[];
    dislikedProblems: string[];
    solvedProblems: string[];
    starredProblems: string[];
    role: 'admin' | 'user';
};
