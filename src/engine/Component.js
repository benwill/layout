import React from "react";
import classNames from "classnames";

import Draggable from "./Draggable";
import widgets from "./widgets";

import "./layoutEngine.css";

function Component({
  id,
  areas,
  props,
  context,
  componentPath,
  onStartDrag,
  onStopDrag,
  type,
}) {
  const { component: ReactComponent, canDrag } = widgets[type];

  const css = classNames("component");

  const component = (
    <div className={css}>
      <ReactComponent
        areas={areas}
        {...props}
        {...context}
        renderAreas={(position) => {
          return context.renderAreas(areas, position, componentPath);
        }}
        renderDropZone={(target, index) => {
          const fullDropzonePath = `${componentPath}.areas.${target}`;
          console.log(fullDropzonePath);
          return context.renderDropZone(id, fullDropzonePath, index);
        }}
        id={id}
        componentPath={componentPath}
        canDrag
      />
    </div>
  );

  return canDrag ? (
    <Draggable
      id={id}
      type={type}
      componentPath={componentPath}
      onStartDrag={onStartDrag}
      onStopDrag={onStopDrag}
    >
      {component}
    </Draggable>
  ) : (
    component
  );
}

export default Component;
