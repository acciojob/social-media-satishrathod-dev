import React, { useContext } from 'react'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import { PostContext } from '../context/PostContext'

function Home() {
	const { posts, addPost, incrementReaction } = useContext(PostContext)

	return (
		<>
			<PostForm addPost={addPost} />
			<Posts posts={posts} incrementReaction={incrementReaction} />
		</>
	)
}

export default Home
