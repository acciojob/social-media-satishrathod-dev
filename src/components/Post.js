import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, handleReaction }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <button onClick={() => handleReaction(post.id, "likes")}>
          👍 {post.likes}
        </button>
        <button onClick={() => handleReaction(post.id, "loves")}>
          ❤️ {post.loves}
        </button>
        <button onClick={() => handleReaction(post.id, "wows")}>
          😮 {post.wows}
        </button>
      </div>
      <Link to={`/edit-post/${post.id}`} className="button">
        Edit
      </Link>
    </div>
  );
};

export default Post;
