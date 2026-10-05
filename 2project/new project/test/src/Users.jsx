import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const usersList = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 6, name: "User 6" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Users List</h2>
      <ul>
        {usersList.map((user) => (
          <li key={user.id} style={{ marginBottom: "8px" }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}