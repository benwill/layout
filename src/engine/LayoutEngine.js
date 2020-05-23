import React from "react";
import { useSelector } from "react-redux";

import DropZone from "./DropZone";
import ReduxComponent from "./ReduxComponent";

import "./layoutEngine.css";

const LayoutContext = React.createContext();

const getComponentPath = (parent, areaName, index) => {
  return `${parent}.areas.${areaName}.${index}`;
};

// renderComponent = (type, areas, props, id, componentPath) => {
//   const { onStartDrag, onStopDrag, updateProperty } = this.props;
//   return (
//     <LayoutContext.Consumer key={id}>
//       {(context) => {
//         return (
//           <Component
//             id={id}
//             areas={areas}
//             props={props}
//             context={context}
//             componentPath={componentPath}
//             onStartDrag={onStartDrag}
//             onStopDrag={onStopDrag}
//             updateProperty={updateProperty}
//             type={type}
//           />
//         );
//       }}
//     </LayoutContext.Consumer>
//   );
// };

// renderAreas = (areas, position, parentPath) => {
//   const area = areas[position];
//   if (!area || area.length === 0) return null;

//   return area.map((c, idx) => {
//     return this.renderComponent(
//       c.type,
//       c.areas,
//       c.props,
//       c.id,
//       getComponentPath(parentPath, position, idx)
//     );
//   });
// };

// renderRoot = (config) => {
//   const c = config.root[0];
//   return this.renderComponent(
//     c.type,
//     c.areas,
//     c.props,
//     c.id,
//     `root.0` // TODO: CHANGE BACK TO ROOT
//   );
// };

// renderDropZone = (id, componentPath, index) => {
//   const { onDrop } = this.props;
//   return (
//     <DropZone
//       id={id}
//       onDrop={onDrop}
//       componentPath={componentPath}
//       targetIndex={index}
//     />
//   );
// };

const LayoutEngine = () => {
  // const { config, designMode = true } = this.props;
  // const root = useSelector((state) => state.layout.config.root);

  // console.log(root);
  return (
    // <LayoutContext.Provider
    //   value={{
    //     designMode,
    //     renderComponent: this.renderComponent,
    //     renderAreas: this.renderAreas,
    //     renderDropZone: this.renderDropZone,
    //   }}
    // >
    <div
      className="layout-engine"
      style={{ width: "100%", height: "100%", display: "flex" }}
    >
      <ReduxComponent componentPath={"root"}></ReduxComponent>
    </div>
    // </LayoutContext.Provider>
  );
};

export default LayoutEngine;
