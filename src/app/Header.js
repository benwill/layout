import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import ModeSwitch from "./components/ModeSwitch";
import { changeExample } from "./redux/actions";

function Header({ onToggle, isDesignMode }) {
  const dispatch = useDispatch();

  const changeToDesigner = useCallback(() => {
    dispatch(changeExample("Designer"));
  }, [dispatch]);

  const changeToSimple = useCallback(() => {
    dispatch(changeExample("Simple"));
  }, [dispatch]);

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
              <a className="navbar-item" href="#/" onClick={changeToDesigner}>
                Designer
              </a>
              <a className="navbar-item" href="#/" onClick={changeToSimple}>
                Simple
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
