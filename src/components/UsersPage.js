import React from "react";
import { Link } from "react-router-dom";

const UsersPage = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user-posts/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
