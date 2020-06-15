import { createReducer } from "@reduxjs/toolkit";
import { changeExample } from "./actions";

const initialState = {
  currentExample: "Tree",
};

export default createReducer(initialState, {
  [changeExample]: (draft, action) => {
    draft.currentExample = action.payload.example;
  },
});
