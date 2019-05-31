import React from "react";
import widgets from "./widgets";

import DropZone from "./DropZone";
import Widget from "./Widget";

const LayoutContext = React.createContext();

function App({ config, designMode = true, onDrop }) {
  const renderComponent = (type, areas, props, id, path) => {
    const { component: Component, canDrag } = widgets[type];

    console.log(path);
    return (
      <LayoutContext.Consumer key={id}>
        {context => {
          const component = (
            <Component
              areas={areas}
              {...props}
              {...context}
              id={id}
              path={path}
              canDrag
            />
          );
          return canDrag ? (
            <Widget id={id} type={type} path={path}>
              {component}
            </Widget>
          ) : (
            component
          );
        }}
      </LayoutContext.Consumer>
    );
  };

  const renderArea = (areas, path, position) => {
    debugger;

    const area = areas[position];
    if (!area || !area.children || !area.children.length > 0) return null;

    return area.children.map(c => {
      return renderComponent(
        c.type,
        c.areas,
        c.props,
        c.id,
        [...path, position]
      );
    });
  };

  const renderDropZone = (area, path, before) => {
    // if(!designMode) return null;
    debugger
    return <DropZone area={area} before={before} path={[...path, area]} onDrop={onDrop} />;
  };

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
        {renderComponent(
          config.type,
          config.areas,
          config.props,
          config.id,
          ["root"]
        )}
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