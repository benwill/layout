import React from "react";

import DropZone from "./DropZone";
import Component from "./Component";

import "./layoutEngine.css";

const LayoutContext = React.createContext();

const getComponentPath = (parent, areaName, index) => {
  return `${parent}.areas.${areaName}.${index}`;
};

function App({ config, designMode = true, onDrop, onStartDrag, onStopDrag }) {
  const renderComponent = (type, areas, props, id, componentPath) => {
    console.log(componentPath);
    return (
      <LayoutContext.Consumer key={id}>
        {(context) => {
          return (
            <Component
              id={id}
              areas={areas}
              props={props}
              context={context}
              componentPath={componentPath}
              onStartDrag={onStartDrag}
              onStopDrag={onStopDrag}
              type={type}
            />
          );
        }}
      </LayoutContext.Consumer>
    );
  };

  const renderAreas = (areas, position, parentPath) => {
    const area = areas[position];

    if (!area || area.length === 0) return null;

    return area.map((c, idx) => {
      return renderComponent(
        c.type,
        c.areas,
        c.props,
        c.id,
        getComponentPath(parentPath, position, idx)
      );
    });
  };

  const renderRoot = (config) => {
    const c = config.root[0];

    return renderComponent(
      c.type,
      c.areas,
      c.props,
      c.id,
      `root.0` // TODO: CHANGE BACK TO ROOT
    );
  };

  const renderDropZone = (id, componentPath, index) => {
    return (
      <DropZone
        id={id}
        onDrop={onDrop}
        componentPath={componentPath}
        targetIndex={index}
      />
    );
  };

  return (
    <LayoutContext.Provider
      value={{
        designMode,
        renderComponent,
        renderAreas,
        renderDropZone,
      }}
    >
      <div
        className="layout-engine"
        style={{ width: "100%", height: "100%", display: "flex" }}
      >
        {renderRoot(config)}
      </div>
    </LayoutContext.Provider>
  );
}

export default App;
