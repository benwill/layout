import { createReducer } from "@reduxjs/toolkit";
import { changeExample, editCard } from "./actions";

const initialState = {
  currentExample: "Tree",
};

export default createReducer(initialState, {
  [changeExample]: (draft, action) => {
    draft.currentExample = action.payload.example;
  },
  [editCard]: (draft, action) => {
    draft.editPath = action.payload.path;
  },
});
