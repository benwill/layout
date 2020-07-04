import dotProp from "dot-prop-immutable";

export const areaContainsItems = (state, componentPath, areaName) => {
  const component = dotProp.get(state.layout.config, componentPath);

  const area = component.areas[areaName];

  if (!area) return false;

  return area.length === 0;
};
