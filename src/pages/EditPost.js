import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext'

function EditPost() {
	const { posts, editPost } = useContext(PostContext)
	const { postId } = useParams()
	const existingPost = posts.find((post) => post.id == postId)
	const navigate = useNavigate()

	if (!existingPost) {
		return <div>Post not found</div>
	}

	const [post, setPost] = useState({
		...existingPost,
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setPost((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		editPost(post)
		navigate(`/posts/${post.id}`)
	}

	return (
		<form onSubmit={handleSubmit} className='container post-form'>
			<h2>Edit Post</h2>
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
				Content:{' '}
				<textarea
					id='postContent'
					name='content'
					value={post.content}
					onChange={handleChange}
					required
				></textarea>
			</label>
			<button disabled={!post.title || !post.content} type='submit'>
				Save Post
			</button>
		</form>
	)
}

export default EditPost
