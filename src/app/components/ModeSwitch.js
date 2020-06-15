import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEdit } from "../../engine";

const ModeSwitch = () => {
  const dispatch = useDispatch();
  const isDesignMode = useSelector((state) => {
    return state.layout.canEdit;
  });

  const onToggle = useCallback(() => {
    dispatch(toggleEdit());
  }, [dispatch]);

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
