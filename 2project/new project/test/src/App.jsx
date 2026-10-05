import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";

// Dummy Page Components
const Home = () => <div style={{ padding: "24px" }}><h2>🏠 Home Page</h2></div>;
const Dashboard = () => <div style={{ padding: "24px" }}><h2>📊 Dashboard Page</h2></div>;
const Profile = () => <div style={{ padding: "24px" }}><h2>👤 Profile Page</h2></div>;
const Settings = () => <div style={{ padding: "24px" }}><h2>⚙️ Settings Page</h2></div>;

const Login = ({ setIsLoggedIn }) => (
  <div style={{ padding: "24px" }}>
    <h2>🔑 Sign In</h2>
    <button
      onClick={() => setIsLoggedIn(true)}
      style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#059669", color: "#fff", border: "none", borderRadius: "6px" }}
    >
      Click to Log In
    </button>
  </div>
);

const SignUp = ({ setIsLoggedIn }) => (
  <div style={{ padding: "24px" }}>
    <h2>📝 Sign Up</h2>
    <button
      onClick={() => setIsLoggedIn(true)}
      style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "6px" }}
    >
      Create Account & Log In
    </button>
  </div>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Dynamic Navbar based on authentication state */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <main>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* Protected Routes (Only accessible after Login/Signup) */}
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/settings"
            element={isLoggedIn ? <Settings /> : <Navigate to="/login" />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}