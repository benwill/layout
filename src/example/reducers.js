import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import initial from "./initial";
import { changeProperties } from "./actions";

const initialState = {
  config: initial,
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
