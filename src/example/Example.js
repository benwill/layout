import React, { useState, useCallback } from "react";
import dotProp from "dot-prop-immutable";
import className from "classnames";

import LayoutEngine from "../engine/LayoutEngine";

import initialConfig from "./initial";
import "./example.css";

const onStartDrag = (setIsDragging) => {
  setIsDragging(true);
};

function Example() {
  const [config, setConfig] = useState(initialConfig);
  const [isDragging, setIsDragging] = useState(false);

  const onStartDrag = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onStopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onDrop = useCallback(
    (source, target) => {
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
    },
    [config]
  );

  const updateProperty = useCallback(
    (componentPath, newProps) => {
      const targetProps = `${componentPath}.props`;
      const originalProps = dotProp.get(config, targetProps);
      const newConfig = dotProp.set(config, targetProps, {
        ...originalProps,
        ...newProps,
      });

      console.log("change", componentPath, newProps);
      setConfig(newConfig);
    },
    [config]
  );

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
        updateProperty={updateProperty}
      />
    </div>
  );
}

export default React.memo(Example);
