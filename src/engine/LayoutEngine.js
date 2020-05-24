import React from "react";
import className from "classnames";
import { useSelector } from "react-redux";
import Component from "./Component";

const LayoutEngine = () => {
  const isDragging = useSelector((state) => state.layout.isDragging);

  const css = className("example", {
    "example--is-dragging": isDragging,
  });

  return (
    <div className={css}>
      <Component componentPath={"root"}></Component>
    </div>
  );
};

export default LayoutEngine;
