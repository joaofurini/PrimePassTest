import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import UserTable from './UserTable'




const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'João', username: 'jpfurini' },
		{ id: 2, name: 'Carlos', username: 'carlinhows' },
		{ id: 3, name: 'Elaine', username: 'elaine_123' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
		 <div class="text-center">
          <h1 >Users List</h1>
          
        </div>
      <div class="my-3 p-3 bg-white rounded box-shadow">
			<div className="flex-row">
			
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
			</div>
		</div>
	)
}

export default App
