import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const UserContext = createContext(null)

function UserContextProvider({ children }) {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: 'User 1',
		},
		{
			id: 2,
			name: 'User 2',
		},
		{
			id: 3,
			name: 'User 3',
		},
	])

	return (
		<UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
	)
}

export { UserContext, UserContextProvider }
