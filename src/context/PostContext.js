import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const PostContext = createContext(null)

function PostContextProvider({ children }) {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'Post 1',
			authorId: 1,
			content: 'This is post 1',
			reactions: {
				thumbsUp: 0,
				party: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			isEdited: false,
		},
		{
			id: 2,
			title: 'Post 2',
			authorId: 2,
			content: 'This is post 2',
			reactions: {
				thumbsUp: 0,
				party: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			isEdited: false,
		},
		{
			id: 3,
			title: 'Post 3',
			authorId: 3,
			content: 'This is post 3',
			reactions: {
				thumbsUp: 0,
				party: 0,
				heart: 0,
				rocket: 0,
				eyes: 0,
			},
			isEdited: false,
		},
	])

	const addPost = (post) => {
		setPosts((prev) => [
			{
				...post,
				id: uuid(),
				reactions: { thumbsUp: 0, party: 0, heart: 0, rocket: 0, eyes: 0 },
				isEdited: false,
			},
			...prev,
		])
	}

	const incrementReaction = (id, reaction) => {
		setPosts((prev) => {
			return prev.map((post) => {
				if (post.id === id) {
					return {
						...post,
						reactions: {
							...post.reactions,
							[reaction]: post.reactions[reaction] + 1,
						},
					}
				}
				return post
			})
		})
	}

	const editPost = (post) => {
		setPosts((prev) => {
			return prev.map((p) => {
				if (p.id === post.id) {
					return { ...post, isEdited: true }
				}
				return p
			})
		})
	}

	return (
		<PostContext.Provider
			value={{ posts, addPost, incrementReaction, editPost }}
		>
			{children}
		</PostContext.Provider>
	)
}

export { PostContext, PostContextProvider }
