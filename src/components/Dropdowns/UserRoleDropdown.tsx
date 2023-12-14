import React from 'react';
import { userRoles } from '@/utils/types/user';

type UserRoleDropdownProps = {
    currentRole: string;
    idx: number;
    handleRoleChange: (idx: number, newRole: string) => void;
};

const UserRoleDropdown:React.FC<UserRoleDropdownProps> = ({ currentRole, idx, handleRoleChange }) => {
    
    return (
        <select value={currentRole} onChange={(e) => handleRoleChange(idx, e.target.value)}
            className='bg-dark-layer-1 text-white rounded px-2 py-1 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
        >
            {userRoles.map(role => (
                <option key={role} value={role}>{role}</option>
            ))}
        </select>
    )
}
export default UserRoleDropdown;