import React, { useState } from "react";

const CreatePost = ({ users, addPost }) => {
  const [postContent, setPostContent] = useState("");
  const [postAuthor, setPostAuthor] = useState(users[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ content: postContent, authorId: postAuthor });
    setPostContent("");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <select
          id="postAuthor"
          value={postAuthor}
          onChange={(e) => setPostAuthor(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <textarea
          id="postContent"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
