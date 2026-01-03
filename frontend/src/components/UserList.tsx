import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, CREATE_USER } from '../graphql/user.queries';

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export const UserList: React.FC = () => {
    const { loading, error, data } = useQuery<{ getUsers: User[] }>(GET_USERS);
    const [createUser] = useMutation(CREATE_USER, {
        refetchQueries: [{ query: GET_USERS }],
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;
        try {
            await createUser({ variables: { name, email } });
            setName('');
            setEmail('');
        } catch (err) {
            console.error('Error creating user:', err);
        }
    };

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '8px' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '8px' }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Add User</button>
            </form>

            <h2>Users List</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {data?.getUsers.map((user) => (
                    <li key={user.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                        <strong>{user.name}</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};
