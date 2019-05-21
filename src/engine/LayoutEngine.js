import React from "react";
import widgets from "./widgets";

import DropZone from "./DropZone";
import Widget from "./Widget";

const LayoutContext = React.createContext();

function App({ config, designMode = true }) {
  const renderComponent = (type, areas, props, id) => {
    const { component: Component, canDrag } = widgets[type];

    return (
      <LayoutContext.Consumer key={id}>
        {context => {
          const component = (
            <Component areas={areas} {...props} {...context} canDrag />
          );
          return canDrag ? (
            <Widget>{component}</Widget>
          ) : (
            component
          );
        }}
      </LayoutContext.Consumer>
    );
  };

  const renderArea = area => {
    if (!area || !area.children || !area.children.length > 0) return null;
    return area.children.map(c => renderComponent(c.type, c.areas, c.props, c.id));
  };

  const renderDropZone = (id, area, before) => {
    // if(!designMode) return null;
    return <DropZone id={id} area={area} before={before} onDrop={() => { console.log('dropped')}}/>
  }

  return (
    <LayoutContext.Provider
      value={{
        designMode,
        renderComponent,
        renderArea,
        renderDropZone
      }}
    >
      <div
        className="layout-engine"
        style={{ width: "100%", height: "100%", display: "flex" }}
      >
        {renderComponent(config.type, config.areas, config.props)}
      </div>
    </LayoutContext.Provider>
  );
}

export default App;
