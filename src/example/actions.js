import { createAction } from "@reduxjs/toolkit";

export const changeProperties = createAction(
  "layout/changeProperties",
  (index, props) => {
    return {
      payload: { index, props },
    };
  }
);
