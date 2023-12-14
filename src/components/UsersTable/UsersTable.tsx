import React from 'react';
import UserRoleDropdown from '../Dropdowns/UserRoleDropdown';
import { ModifiedUserRoles, UserRole } from '@/utils/types/user';

type UsersTableProps = {
    userRoles: UserRole[];
    loading: boolean;
    handleRoleChange: (idx: number, newRole: string) => void;
    currUserRoles: ModifiedUserRoles;
};

const UsersTable:React.FC<UsersTableProps> = ({ currUserRoles, userRoles, loading, handleRoleChange }) => {

    return (
        <>
            {loading ? (
                <div className="max-w-[400px] mx-auto sm:w-7/12 w-full animate-pulse">
                    {[...Array(userRoles.length)].map((_, i) => (
                        <LoadingSkeleton key={i} />
                    ))}
                </div>
            ) : (
                <tbody className='text-white'>
                    {userRoles.map((userRole, idx) => {
                        return (
                            <tr key={userRole.uid} className={`${idx % 2 === 1 ? 'bg-dark-layer-1' : ''}`}>
                                <td className='px-6 py-4'>
                                    {userRole.displayName}
                                </td>
                                <td className='px-6 py-4'>
                                    <UserRoleDropdown currentRole={currUserRoles[userRole.uid]} idx={idx} handleRoleChange={handleRoleChange} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody >
            )}
            
        </>
    )
}
export default UsersTable;

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='h-4 sm:w-48 w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-48 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};