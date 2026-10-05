import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Helper function to handle active NavLink styling
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: isActive ? "700" : "500",
    color: isActive ? "#ffffff" : "#333333",
    backgroundColor: isActive ? "#e11d48" : "transparent",
    transition: "all 0.2s ease",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ fontWeight: "800", fontSize: "1.2rem", color: "#e11d48" }}>
        MyApp
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {isLoggedIn ? (
          // Shown ONLY when logged in
          <>
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/dashboard" style={navLinkStyle}>
              Dashboard
            </NavLink>
            <NavLink to="/profile" style={navLinkStyle}>
              Profile
            </NavLink>
            <NavLink to="/settings" style={navLinkStyle}>
              Settings
            </NavLink>

            <button
              onClick={handleLogout}
              style={{
                marginLeft: "12px",
                padding: "8px 16px",
                backgroundColor: "#f43f5e",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          // Shown ONLY when logged out
          <>
            <NavLink to="/login" style={navLinkStyle}>
              Sign In
            </NavLink>
            <NavLink to="/signup" style={navLinkStyle}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}