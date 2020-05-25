import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import className from "classnames";
import { useSelector } from "react-redux";
import Component from "./Component";

import { setConfig } from "./redux/actions";

const LayoutEngine = ({ initialConfig, widgets }) => {
  const isDragging = useSelector((state) => state.layout.isDragging);
  const initialised = useSelector((state) => state.layout.initialised);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfig(initialConfig));
  }, [dispatch, initialConfig]);

  const css = className("example", {
    "example--is-dragging": isDragging,
  });

  if (!initialised) return null;

  return (
    <div className={css}>
      <Component componentPath="root" widgets={widgets}></Component>
    </div>
  );
};

export default LayoutEngine;
