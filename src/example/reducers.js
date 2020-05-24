import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import dotProp from "dot-prop-immutable";

import initial from "./initial";
import {
  changeProperties,
  startDragging,
  stopDragging,
  moveItem,
} from "./actions";

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
  [startDragging]: (draft) => {
    draft.isDragging = true;
  },
  [stopDragging]: (draft) => {
    draft.isDragging = false;
  },
  [moveItem]: (draft, action) => {
    const { sourcePath, targetPath, targetIndex } = action.payload;
    // Find source
    const itemToMove = dotProp.get(draft.config, sourcePath);

    // Find target list
    const items = dotProp.get(draft.config, targetPath);

    // Target position
    const index = targetIndex === undefined ? items.length : targetIndex;

    const newItems = [
      ...items.slice(0, index),
      itemToMove,
      ...items.slice(index),
    ];

    // Add item to target list
    let newConfig = dotProp.set(draft.config, targetPath, newItems);

    // Remove source
    newConfig = dotProp.delete(newConfig, sourcePath);

    draft.config = newConfig;
  },
});

const rootReducer = combineReducers({
  layout,
});

export default rootReducer;
