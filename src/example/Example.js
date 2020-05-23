import React, { useState } from "react";
import dotProp from "dot-prop-immutable";

import LayoutEngine from "../engine/LayoutEngine";

import initialConfig from "./initial";
// import "./App.css";

function Example() {
  const [config, setConfig] = useState(initialConfig);

  const onDrop = (source, target) => {
    console.log("move", source, "to", target);

    // Delete original
    const itemToMove = dotProp.get(config, source.componentPath);

    let newConfig = dotProp.delete(config, source.componentPath);

    // Move to new dropzone
    const itemArrayPath = target.componentPath + `.areas.${target.position}`; // TODO: Passed from dropzone?
    const items = dotProp.get(newConfig, itemArrayPath);

    const newItems = target.before
      ? [itemToMove, ...items]
      : [...items, itemToMove];

    newConfig = dotProp.set(newConfig, itemArrayPath, newItems);

    setConfig(newConfig);
  };

  return <LayoutEngine config={config} onDrop={onDrop} />;
}

export default Example;
