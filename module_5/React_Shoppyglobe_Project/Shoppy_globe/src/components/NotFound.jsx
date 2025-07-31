// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you're lost.</p>
      <Link to="/" style={{ color: "teal", textDecoration: "underline" }}>Go Back Home</Link>
    </div>
  );
}

export default NotFound;
