import React from 'react'
import Post from './Post'

function Posts({ posts = [], incrementReaction }) {
	return (
		<div className='container posts'>
			<h2>Posts</h2>
			<section className='posts-list'>
				{posts.map((post) => (
					<Post post={post} key={post.id} incrementReaction={incrementReaction}/>
				))}
			</section>
		</div>
	)
}

export default Posts
