import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link, useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext'

function UserPosts() {
	const { posts } = useContext(PostContext)
	const { users } = useContext(UserContext)
	const { userId } = useParams()

	const user = users.find((user) => user.id == userId)
	const userPosts = posts.filter((post) => post.authorId == userId)

	return (
		<div className='container user-posts'>
			<h2>{user?.name}</h2>
			<ul>
				{userPosts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserPosts
