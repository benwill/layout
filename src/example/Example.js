import React, { useState } from "react";
import dotProp from "dot-prop-immutable";
import className from "classnames";

import LayoutEngine from "../engine/LayoutEngine";

import initialConfig from "./initial";
import "./example.css";

function Example() {
  const [config, setConfig] = useState(initialConfig);
  const [isDragging, setIsDragging] = useState(false);

  const onStartDrag = () => {
    setIsDragging(true);
  };

  const onStopDrag = () => {
    setIsDragging(false);
  };

  const onDrop = (source, target) => {
    console.log("move", source, "to", target);

    // Find source
    const itemToMove = dotProp.get(config, source.componentPath);

    // Move to new dropzone
    const itemArrayPath = target.componentPath;
    const items = dotProp.get(config, itemArrayPath);

    // Target position
    const index =
      target.targetIndex === undefined ? items.length : target.targetIndex;

    const newItems = [
      ...items.slice(0, index),
      itemToMove,
      ...items.slice(index),
    ];

    // Add copy of source to target
    let newConfig = dotProp.set(config, itemArrayPath, newItems);

    // Remove source
    newConfig = dotProp.delete(newConfig, source.componentPath);

    setConfig(newConfig);
  };

  const css = className("example", {
    "example--is-dragging": isDragging,
  });

  return (
    <div className={css}>
      <LayoutEngine
        config={config}
        onDrop={onDrop}
        onStartDrag={onStartDrag}
        onStopDrag={onStopDrag}
      />
    </div>
  );
}

export default Example;
