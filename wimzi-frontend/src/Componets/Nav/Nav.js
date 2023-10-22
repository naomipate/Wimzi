import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <NavLink className="navbar-brand logo-link" to={"/"}>
          Wimzi
        </NavLink>
        <NavLink className="navbar-brand about-link" to={"/about"}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
