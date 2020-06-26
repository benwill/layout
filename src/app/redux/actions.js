import { createAction } from "@reduxjs/toolkit";

export const changeExample = createAction(
  "example/changeExample",
  (example) => {
    return {
      payload: {
        example,
      },
    };
  }
);

export const focusCard = createAction("example/focusCard", (path) => {
  return {
    payload: {
      path,
    },
  };
});
