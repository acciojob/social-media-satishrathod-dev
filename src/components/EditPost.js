import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditPost = ({ posts, updatePost }) => {
  const { postId } = useParams();
  const history = useHistory();
  const post = posts.find((post) => post.id === parseInt(postId, 10));
  const [postTitle, setPostTitle] = useState(post.title);
  const [postContent, setPostContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post.id, { title: postTitle, content: postContent });
    history.push("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          id="postContent"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button className="button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPost;
