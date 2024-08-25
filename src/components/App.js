import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import UsersPage from "./UsersPage";
import UserPosts from "./UserPosts";
import NotificationsPage from "./NotificationsPage";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import "../App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [users] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
  const [notifications] = useState([]);

  const addPost = (newPost) => {
    setPosts([
      {
        ...newPost,
        id: posts.length + 1,
        title: `Post ${posts.length + 1}`,
        likes: 0,
        loves: 0,
        wows: 0,
      },
      ...posts,
    ]);
  };

  const handleReaction = (postId, reaction) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, [reaction]: post[reaction] + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const updatePost = (postId, updatedData) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, ...updatedData } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage posts={posts} handleReaction={handleReaction} />
            }
          />
          <Route path="/users" element={<UsersPage users={users} />} />
          <Route
            path="/user-posts/:userId"
            element={
              <UserPosts posts={posts} handleReaction={handleReaction} />
            }
          />
          <Route
            path="/notifications"
            element={<NotificationsPage notifications={notifications} />}
          />
          <Route
            path="/create-post"
            element={<CreatePost users={users} addPost={addPost} />}
          />
          <Route
            path="/edit-post/:postId"
            element={<EditPost posts={posts} updatePost={updatePost} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
