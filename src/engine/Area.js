import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import React, { useCallback } from "react";
import Component from "./ReduxComponent";

// import widgets from "./widgets";
import dotProp from "dot-prop-immutable";
// import { changeProperties } from "../example/actions";

// const getComponentPath = (parent, areaName, index) => {
//   return `${parent}.areas.${areaName}.${index}`;
// };

// const renderComponentHelper = (componentPath) => {
//   return <ReduxComponent componentPath={componentPath} />;
// };

// const renderAreaHelper = (areaNames, parentPath, areaName) => {
//   // do this as a component?
//   return areaNames.map((c, idx) => {
//     const componentPath = getComponentPath(parentPath, areaName, idx);

//     // return null;
//     return (
//       <ReduxComponent key={componentPath} componentPath={componentPath} />
//       //   <span key={parentPath + areaName + idx}>
//       //     {idx} - {)}
//       //   </span>
//     );
//     // return this.renderComponent(
//     //   c.type,
//     //   c.areas,
//     //   c.props,
//     //   c.id,
//     //
//     // );
//   });
// };

const Area = ({ componentPath, areaName }) => {
  // console.log("render area", componentPath);
  const totalComponents = useSelector((state) => {
    const components = dotProp.get(
      state.layout.config,
      `${componentPath}.areas.${areaName}`
    );
    return components.length;
  });

  // const fullPath = `${componentPath}.areas.${areaName}`;

  console.log("RENDERING AREA", componentPath, areaName);

  // return null;
  return [...Array(totalComponents)].map((item, index) => {
    return (
      <Component
        key={index}
        componentPath={`${componentPath}.areas.${areaName}.${index}`}
      />
    );
  });

  // // <div className="area">
  // componentPaths.map((id, idx) => {
  //   return (

  //   );
  // })
  // </div>
};

export default Area;
