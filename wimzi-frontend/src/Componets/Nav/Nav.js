import React from 'react'
import "./Nav.css"; 

function Nav() {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Wimzi
        </a>
        <a className="navbar-brand" href="/about">
          About
        </a>
      </div>
    </nav>
  );
}

export default Nav