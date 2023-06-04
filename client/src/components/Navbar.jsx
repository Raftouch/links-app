import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: "0 2rem" }}>
        <span to="/" className="brand-logo left" style={{ padding: "0 2rem" }}>
          Links App
        </span>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
