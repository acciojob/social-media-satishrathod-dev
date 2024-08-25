import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = ({ posts, handleReaction }) => {
  const { userId } = useParams();
  const userPosts = posts.filter(
    (post) => post.authorId === parseInt(userId, 10)
  );

  return (
    <div>
      <h2>User Posts</h2>
      <div className="posts-list">
        {userPosts.map((post) => (
          <Post key={post.id} post={post} handleReaction={handleReaction} />
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
