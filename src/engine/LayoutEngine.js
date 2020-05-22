import React from "react";
import widgets from "./widgets";

import DropZone from "./DropZone";
import Widget from "./Widget";

const LayoutContext = React.createContext();

const getComponentPath = (parent, areaName, index) => {
  return `${parent}.areas.${areaName}.${index}`;
};

function App({ config, designMode = true, onDrop }) {
  const renderComponent = (type, areas, props, id, componentPath) => {
    const { component: Component, canDrag } = widgets[type];

    console.log(componentPath);
    return (
      <LayoutContext.Consumer key={id}>
        {context => {
          const component = (
            <>
              {/* <span>{componentPath}</span> */}
              <Component
                areas={areas}
                {...props}
                {...context}
                renderAreas={position => {
                  return context.renderAreas(areas, position, componentPath);
                }}
                renderDropZone={(position, isBefore) => {
                  return context.renderDropZone(
                    id,
                    position,
                    isBefore,
                    componentPath
                  );
                }}
                id={id}
                componentPath={componentPath}
                canDrag
              />
            </>
          );
          return canDrag ? (
            <Widget id={id} type={type} componentPath={componentPath}>
              {component}
            </Widget>
          ) : (
            component
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

  const renderRoot = config => {
    const c = config.root[0];

    return renderComponent(
      c.type,
      c.areas,
      c.props,
      c.id,
      `root.0` // TODO: CHANGE BACK TO ROOT
    );
  };

  const renderDropZone = (id, position, before, componentPath) => {
    return (
      <DropZone
        id={id}
        position={position}
        before={before}
        onDrop={onDrop}
        componentPath={componentPath}
      />
    );
  };

  return (
    <LayoutContext.Provider
      value={{
        designMode,
        renderComponent,
        renderAreas,
        renderDropZone
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

// Consider resursing through tree
// function findNode(id, currentNode) {

//   if (id == currentNode.id) {
//       return currentNode;
//   } else {
//       var result;
//       for(var index in currentNode.children){
//           var node = currentNode.children[index];
//           if(node.id == id)
//               return node;
//           findNode(id, node);
//       }
//       return "No Node Present";
//   }
// }
// console.log(findNode("1", node));
