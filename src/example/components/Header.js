import React, { useCallback } from "react";

import ModeSwitch from "./ModeSwitch";

function Header({ onToggle, isDesignMode, changeExample }) {
  const changeToTree = useCallback(() => {
    changeExample("tree");
  }, [changeExample]);

  const changeToDashboard = useCallback(() => {
    changeExample("dashboard");
  }, [changeExample]);

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
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#/">
              Examples
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="#/" onClick={changeToTree}>
                Tree
              </a>
              <a className="navbar-item" href="#/" onClick={changeToDashboard}>
                Dashboard
              </a>
            </div>
          </div>
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
