import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User Detail Page</h2>
      <h3>User id is :{id}</h3>

      <br />
      <Link to="/users">Back</Link>
    </div>
  );
}