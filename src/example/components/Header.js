import React from "react";

import ModeSwitch from "./ModeSwitch";

function Header({ onToggle, isDesignMode }) {
  return (
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="icon icon-medium">
            <i class="fas fa-th"></i>
          </span>
          <h1 className="title is-5 has-text-white">Nested Layout</h1>
        </a>

        <a
          href="/"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="./">
            Example 1
          </a>

          <a class="navbar-item" href="./">
            Example 2
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <ModeSwitch onToggle={onToggle} isDesignMode={isDesignMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
