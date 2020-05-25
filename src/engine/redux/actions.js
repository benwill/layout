import { createAction } from "@reduxjs/toolkit";

export const changeProperties = createAction(
  "layout/changeProperties",
  (componentPath, props) => {
    return {
      payload: { componentPath, props },
    };
  }
);

export const startDragging = createAction("layout/startDragging");
export const stopDragging = createAction("layout/stopDragging");
export const setConfig = createAction("layout/setConfig", (config, canEdit) => {
  return {
    payload: {
      config,
      canEdit,
    },
  };
});

export const moveItem = createAction("layout/moveItem", (source, target) => {
  return {
    payload: { source, target },
  };
});

export const addItem = createAction("layout/addItem", (source, target) => {
  return {
    payload: { source, target },
  };
});
