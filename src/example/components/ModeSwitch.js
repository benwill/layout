import React from "react";

const ModeSwitch = ({ isDesignMode, onToggle }) => {
  const activeCss = "button is-selected is-primary";
  const inActiveCss = "button";

  return (
    <div className="buttons">
      <button
        className={isDesignMode ? activeCss : inActiveCss}
        onClick={isDesignMode ? null : onToggle}
      >
        Design Mode
      </button>
      <button
        className={isDesignMode ? inActiveCss : activeCss}
        onClick={isDesignMode ? onToggle : null}
      >
        Run Mode
      </button>
    </div>
  );
};

export default ModeSwitch;
