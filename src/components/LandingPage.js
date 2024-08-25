import React, { useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const LandingPage = ({ posts, handleReaction }) => {
  return (
    <div id="landing-page" className="landing">
      <h1>GenZ</h1>

      <nav>
        <Link className="btn" to="/users">
          Users
        </Link>
        <Link className="btn" to="/notifications">
          Notifications
        </Link>
        <Link className="btn" to="/create-post">
          Create Post
        </Link>
      </nav>
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} handleReaction={handleReaction} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
