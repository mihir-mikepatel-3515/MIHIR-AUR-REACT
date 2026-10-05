import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  const members = [
    { slug: "mihir", label: "Mihir's Workspace" },
    { slug: "krisha", label: "Krisha's Career Hub" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Profiles & Portals</h2>
      <ul>
        {members.map((member) => (
          <li key={member.slug} style={{ marginBottom: "10px" }}>
            <Link to={`/team/${member.slug}`}>{member.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}