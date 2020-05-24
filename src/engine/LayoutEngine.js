import React from "react";
import className from "classnames";
import { useSelector } from "react-redux";
import Component from "./Component";

import "./layoutEngine.css";

const LayoutEngine = () => {
  const isDragging = useSelector((state) => state.layout.isDragging);

  const css = className("example", {
    "example--is-dragging": isDragging,
  });

  return (
    <div className={css}>
      <div
        className="layout-engine"
        style={{ width: "100%", height: "100%", display: "flex" }}
      >
        <Component componentPath={"root"}></Component>
      </div>
    </div>
  );
};

export default LayoutEngine;
