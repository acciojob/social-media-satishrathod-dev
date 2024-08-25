import React, { useContext } from 'react'
import { NotificationContext } from '../context/NotificationContext'
import { UserContext } from '../context/UserContext'

function Notifications() {
	const { notifications } = useContext(NotificationContext)
	const { users } = useContext(UserContext)

	const getAuthor = (id) => {
		return users.find((user) => user.id == id)
	}

	return (
		<section className='container notifications'>
			<h2>Notifications</h2>
			<section>
					{notifications.map((notification) => (
						<section key={notification.id}>
							<strong>{getAuthor(notification.authorId).name}</strong>{' '}
							{notification.message}
						</section>
					))}
			</section>
		</section>
	)
}

export default Notifications
