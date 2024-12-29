import React, { useState } from 'react'
import { useGetAllUsersQuery, useDeleteUserMutation } from '../features/auth';


function Users() {


    const { data: users, error, isLoading, refetch } = useGetAllUsersQuery();
    const [expandedUserId, setExpandedUserId] = useState(null);
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();


    const toggleExpand = (userId) => {
        setExpandedUserId(prevId => prevId === userId ? null : userId);
    };
    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId)
            refetch()
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className='ms-4'>
            <h2 className='text-center my-4'>Users</h2>
            {users.length === 0 ? (
                <p className='fs-2'>There are no users.</p>
            ) : (
                users.map((user) => (
                    <div key={user._id}>
                        <span className='fw-bold'>Email: {user.email}</span>
                        
                        <button className='btn btn-primary bg-transparent w-25 border-0' onClick={() => toggleExpand(user._id)} >
                            {expandedUserId === user._id ? (
                                <i className="bi bi-chevron-up text-dark fs-4 fw-bold"></i>
                            ) : (
                                <i className="bi bi-chevron-down fs-4 text-dark fw-bold"></i>
                            )}
                        </button>
                        {expandedUserId === user._id && (
                            <div>
                                <p>First Name: {user.firstName}</p>
                                <p>Last Name: {user.lastName}</p>
                                <p>Email: {user.email}</p>
                                <p>Role: {user.role}</p>
                                <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
                                <button onClick={() => handleDelete(user._id)} disabled={isDeleting}>
                                    {isDeleting ? 'Deleting...' : 'Delete'}
                                </button>
                            </div>
                        )}
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default Users