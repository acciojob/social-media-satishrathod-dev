import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
	const navigate = useNavigate()
	const [isClicked, setIsClicked] = useState(false)

	const handleClick = () => {
		navigate('/notifications')
		setIsClicked(true)
	}

	return (
		<header className='header container App'>
			<h1>GenZ</h1>
			<section className='notificationsList'>
				<ul>
					<li>
						<Link to='/'>Posts</Link>
					</li>
					<li>
						<Link to='/users'>Users</Link>
					</li>
					<li>
						<Link to='/notifications' onClick={handleClick}>Notifications</Link>
					</li>
				</ul>
				{!isClicked ? (
					<div>
						<button className='button' onClick={handleClick}>
							Refresh Notifications
						</button>
					</div>
				) : (
					<button className='button' onClick={handleClick}>
						Refresh Notifications
					</button>
				)}
			</section>
		</header>
	)
}

export default Header
