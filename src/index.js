import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { PostContextProvider } from './context/PostContext'
import { UserContextProvider } from './context/UserContext'
import { NotificationContextProvider } from './context/NotificationContext'

ReactDOM.render(
	<UserContextProvider>
		<PostContextProvider>
			<NotificationContextProvider>
				<App />
			</NotificationContextProvider>
		</PostContextProvider>
	</UserContextProvider>,
	document.getElementById('root')
)
