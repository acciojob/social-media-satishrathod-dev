import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { Link, useParams } from 'react-router-dom'

function PostDetails() {
	const { posts, incrementReaction } = useContext(PostContext)
	const { postId } = useParams()

    const post = posts.find((post) => post.id == postId)

    if (!post) {
        return <div>Post not found</div>
    }

	return (
		<div className='post container'>
			<h2>{post.title}</h2>
			<p className='author'>by {post.author}</p>
			<p>{post.content}</p>
			<div className='reactions'>
				<button onClick={() => incrementReaction(post.id, 'thumbsUp')}>
					👍{post.reactions.thumbsUp}
				</button>
				<button onClick={() => incrementReaction(post.id, 'party')}>
					🎉{post.reactions.party}
				</button>
				<button onClick={() => incrementReaction(post.id, 'heart')}>
					❤️{post.reactions.heart}
				</button>
				<button onClick={() => incrementReaction(post.id, 'rocket')}>
					🚀{post.reactions.rocket}
				</button>
				<button onClick={() => incrementReaction(post.id, 'eyes')}>
					👀{post.reactions.eyes}
				</button>
			</div>
			<Link className='button' to={`/edit/posts/${post.id}`}>
				Edit Post
			</Link>
		</div>
	)
}

export default PostDetails
