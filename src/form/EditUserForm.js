import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() =>{
        setUser(props.currentUser)
    },[props])

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <div class="form-group">
                <label>Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div class="form-group">
                <label>Username</label>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
            </div>
            <button>Update User</button>
            <button
                onClick={() => props.SetEditing(false)}
                className="btn btn-danger"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm