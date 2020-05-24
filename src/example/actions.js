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
