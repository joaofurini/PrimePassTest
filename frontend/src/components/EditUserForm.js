import React, { useState, useEffect } from 'react'
//Creating EdiUserForm Component 
const EditUserForm = props => {
  //Declaring the state user and setUser
  const [ user, setUser ] = useState(props.currentUser)

  //Using the effect to update the user.
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
  //Method to hande the change of the input
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
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
