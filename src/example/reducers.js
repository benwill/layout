import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { test } from "./initial";
import { changeProperties } from "./actions";

const initialState = {
  config: test,
  isDragging: false,
};

const layout = createReducer(initialState, {
  [changeProperties]: (draft, action) => {
    const { index, props } = action.payload;
    draft.config[index].props.value = props.value;
  },
});
const rootReducer = combineReducers({
  layout,
});

export default rootReducer;
