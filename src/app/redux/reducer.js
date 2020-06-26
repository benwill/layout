import { createReducer } from "@reduxjs/toolkit";
import { changeExample, focusCard } from "./actions";

const initialState = {
  currentExample: "Tree",
};

export default createReducer(initialState, {
  [changeExample]: (draft, action) => {
    draft.currentExample = action.payload.example;
  },
  [focusCard]: (draft, action) => {
    draft.editPath = action.payload.path;
  },
});
