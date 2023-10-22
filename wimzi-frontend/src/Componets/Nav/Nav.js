import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Wimzi
        </NavLink>
        <NavLink style={{textDecoration: "none"}}>About</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
