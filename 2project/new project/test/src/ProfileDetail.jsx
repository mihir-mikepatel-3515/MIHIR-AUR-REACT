import React from "react";
import { useParams, Link } from "react-router-dom";

const profilesData = {
  mihir: {
    fullName: "Mihir Patel",
    field: "Full-Stack Web Development & Tech",
    focus: "MERN Stack, React 19, and Software Projects",
  },
  krisha: {
    fullName: "Krisha",
    field: "Healthcare & Nursing Education",
    focus: "B.Sc. Nursing, Clinical Instruction, and Career Growth",
  },
};

export default function ProfileDetail() {
  const { personName } = useParams();
  const profile = profilesData[personName?.toLowerCase()];

  if (!profile) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Profile Not Found</h2>
        <Link to="/team">Back to Profiles</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px" }}>
      <h2>Personal Profile</h2>
      <p><b>Name:</b> {profile.fullName}</p>
      <p><b>Domain:</b> {profile.field}</p>
      <p><b>Current Goal:</b> {profile.focus}</p>

      <br />
      <Link to="/team">← Back to Overview</Link>
    </div>
  );
}