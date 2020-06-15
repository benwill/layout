import React from "react";
import className from "classnames";
import { useSelector } from "react-redux";
import Component from "./Component";

const Layout = ({ widgets, onFocus }) => {
  const isDragging = useSelector((state) => state.layout.isDragging);
  const initialised = useSelector((state) => state.layout.initialised);

  const css = className("layout", {
    "layout--is-dragging": isDragging,
  });

  if (!initialised) return null;

  return (
    <div className={css}>
      <Component
        componentPath="root"
        widgets={widgets}
        onFocus={onFocus}
      ></Component>
    </div>
  );
};

export default Layout;
