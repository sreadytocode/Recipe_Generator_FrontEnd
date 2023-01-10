import React from "react";
import "./Button.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <Link to="/">
          <button
            className="btn login-btn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </Link>
      )}
    </>
  );
};

export default LogoutButton;

//Log out, may not keep
