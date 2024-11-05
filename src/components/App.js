import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import EditPost from "../pages/EditPost";
import Users from "../pages/Users";
import UserPosts from "../pages/UserPosts";
import Notifications from "../pages/Notifications";
import { NotificationContextProvider } from "../context/NotificationContext";

const App = () => {
  return (
    <NotificationContextProvider>
      <main>
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="posts/:postId" element={<PostDetails />} />
              <Route path="edit/posts/:postId" element={<EditPost />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:userId" element={<UserPosts />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </NotificationContextProvider>
  );
};

export default App;
