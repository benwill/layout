import React from "react";

import ModeSwitch from "./ModeSwitch";

function Header({ onToggle, isDesignMode }) {
  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="icon icon-medium">
            <i className="fas fa-th"></i>
          </span>
          <h1 className="title is-5 has-text-white">Nested Layout</h1>
        </a>

        <a
          href="/"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="./">
            Example 1
          </a>

          <a className="navbar-item" href="./">
            Example 2
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <ModeSwitch onToggle={onToggle} isDesignMode={isDesignMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
