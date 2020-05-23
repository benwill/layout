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
  const fullPath = `${componentPath}.areas.${areaName}`;

  console.log("render area", componentPath);
  const componentIds = useSelector((state) => {
    const components = dotProp.get(state.layout.config, fullPath);
    return components.map((x) => x.id);
  });

  return (
    componentIds &&
    componentIds.map((id, idx) => {
      return <Component key={id} componentPath={`${fullPath}.${idx}`} />;
    })
  );
};

export default Area;
