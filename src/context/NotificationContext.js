import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const NotificationContext = createContext(null)

function NotificationContextProvider({ children }) {
	const [notifications, setNotifications] = useState([])

	const addNotification = (notification) => {
		setNotifications((prev) => [
			{
				...notification,
				id: uuid(),
			},
			...prev,
		])
	}

	return (
		<NotificationContext.Provider value={{ notifications, addNotification }}>
			{children}
		</NotificationContext.Provider>
	)
}

export { NotificationContext, NotificationContextProvider }
