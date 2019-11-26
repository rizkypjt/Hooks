import React from 'react'

const UserTable = props => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button type="button" 
                                onClick={() => {
                                    props.editRow(user)
                                }}
                                className="btn btn-primary"
                            >
                                Edit
                            </button>&nbsp;
                            <button 
                                onClick={() => props.deleteUser(user.id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default UserTable