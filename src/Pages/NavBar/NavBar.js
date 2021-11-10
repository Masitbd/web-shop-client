import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/services">
          Add Service
        </NavLink>
        <NavLink activeClassName="active" to="/mylist">
          Mylist
        </NavLink>
        <NavLink activeClassName="active" to="/gallery">
          Gallery
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        {/*  {user.displayName && (
          <span style={{ color: "white" }}>Hello {user.displayName}</span>
        )}
        {user.displayName ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        )} */}
      </nav>
    </div>
  );
};

export default NavBar;
