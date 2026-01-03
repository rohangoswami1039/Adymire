import React from 'react';
import { UserList } from '../components/UserList';

export const UsersPage: React.FC = () => {
    return (
        <div>
            <h1>User Management</h1>
            <UserList />
        </div>
    );
};
