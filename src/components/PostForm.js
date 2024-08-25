import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { NotificationContext } from '../context/NotificationContext'

function PostForm({ addPost }) {
	const { users } = useContext(UserContext)
	const { addNotification } = useContext(NotificationContext)

	const [post, setPost] = useState({
		title: '',
		authorId: '',
		content: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setPost((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addPost(post)
		// addNotification({
		// 	authorId: post.authorId,
		// 	message: 'Post added',
		// })
		setPost({ title: '', authorId: '', content: '' })
	}

	return (
		<form onSubmit={handleSubmit} className='container post-form'>
			<h2>Add a New Post</h2>
			<label>
				Post Title:{' '}
				<input
					id='postTitle'
					name='title'
					value={post.title}
					onChange={handleChange}
					type='text'
					placeholder="What's on your mind?"
					required
				/>
			</label>
			<label>
				Author:{' '}
				<select
					id='postAuthor'
					name='authorId'
					value={post.authorId}
					onChange={handleChange}
					required
				>
					<option value=''></option>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</label>
			<label>
				Content:{' '}
				<textarea
					id='postContent'
					name='content'
					value={post.content}
					onChange={handleChange}
					required
				></textarea>
			</label>
			<button
				disabled={!post.title || !post.content || !post.authorId}
				type='submit'
			>
				Save Post
			</button>
		</form>
	)
}

export default PostForm
