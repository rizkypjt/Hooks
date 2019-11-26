import React, { useState } from 'react'

const AddUserForm = props => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username)
                    return
                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange} className="form-control" />
            </div>
            <button className="btn btn-primary">Add new user</button><br/><br/><br/>
        </form>
    )
}

export default AddUserForm