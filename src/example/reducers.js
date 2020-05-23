import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import dotProp from "dot-prop-immutable";

import initial from "./initial";
import { changeProperties } from "./actions";

const initialState = {
  config: initial,
  isDragging: false,
};

const layout = createReducer(initialState, {
  [changeProperties]: (draft, action) => {
    const { componentPath, props } = action.payload;

    const targetPropsPath = `${componentPath}.props`;
    const originalProps = dotProp.get(draft.config, targetPropsPath);

    draft.config = dotProp.set(draft.config, targetPropsPath, {
      ...originalProps,
      ...props,
    });
  },
});
const rootReducer = combineReducers({
  layout,
});

export default rootReducer;
