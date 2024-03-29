import { useSelector } from "react-redux";

import React from "react";
import Component from "./Component";

import dotProp from "dot-prop-immutable";

const Area = ({ onFocus, componentPath, areaName, widgets }) => {
  const totalComponents = useSelector((state) => {
    const components = dotProp.get(
      state.layout.config,
      `${componentPath}.areas.${areaName}`
    );

    if (components === undefined) {
      return 0;
    }

    // TODO: if not an array, throw an error, badly named area
    return components.length;
  });

  return [...Array(totalComponents)].map((_item, index) => {
    return (
      <Component
        key={index}
        componentPath={`${componentPath}.areas.${areaName}.${index}`}
        widgets={widgets}
        onFocus={onFocus}
      />
    );
  });
};

export default Area;
