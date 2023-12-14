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

export type UserRole = {
    uid: string;
    displayName: string;
    role: 'admin' | 'user';
};

export type ModifiedUserRoles = {
    [key: string]: string;
}

export const userRoles: string[] = ['admin', 'user']