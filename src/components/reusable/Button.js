import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="login">
      <button className="btn">
        <i className="fas fa-user" />
        Login
      </button>
    </Link>
  );
}
