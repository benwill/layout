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

export const editCard = createAction("example/editCard", (path) => {
  return {
    payload: {
      path,
    },
  };
});
