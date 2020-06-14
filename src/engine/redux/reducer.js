import { createReducer } from "@reduxjs/toolkit";
import dotProp from "dot-prop-immutable";
import { combineReducers } from "redux";

import {
  changeProperties,
  startDragging,
  stopDragging,
  moveItem,
  addItem,
  setConfig,
  removeItem,
} from "./actions";
import shortid from "shortid";

const initialState = {
  initialised: false,
  config: { root: {} },
  isDragging: false,
};

const addItemToDraft = (draft, targetPath, targetIndex, item) => {
  // Find target list
  const items = dotProp.get(draft.config, targetPath);

  // Target position
  const index = targetIndex === undefined ? items.length : targetIndex;

  const newItems = [...items.slice(0, index), item, ...items.slice(index)];

  // Add item to target list
  return dotProp.set(draft.config, targetPath, newItems);
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
  [setConfig]: (draft, action) => {
    draft.config = action.payload.config;
    draft.canEdit = action.payload.canEdit;
    draft.initialised = true;
  },
  [startDragging]: (draft) => {
    draft.isDragging = true;
  },
  [stopDragging]: (draft) => {
    draft.isDragging = false;
  },
  [moveItem]: (draft, action) => {
    const { source, target } = action.payload;

    const { targetPath, targetIndex } = target;

    // Don't let widgets be 'moved' into themselves
    if (targetPath.includes(source.sourcePath)) return;

    // Find source
    const itemToMove = dotProp.get(draft.config, source.sourcePath);

    // Add into list
    let newConfig = addItemToDraft(draft, targetPath, targetIndex, itemToMove);

    // Remove source
    newConfig = dotProp.delete(newConfig, source.sourcePath);

    draft.config = newConfig;
  },
  [addItem]: (draft, action) => {
    const { source, target } = action.payload;

    const { targetPath, targetIndex } = target;
    const { type, props } = source;

    const newItem = {
      areas: {
        main: [],
      },
      id: shortid.generate(),
      type,
      props,
    };

    // Add into list
    draft.config = addItemToDraft(draft, targetPath, targetIndex, newItem);
  },
  [removeItem]: (draft, action) => {
    const { source } = action.payload;
    draft.config = dotProp.delete(draft.config, source.sourcePath);
  },
});

const rootReducer = combineReducers({
  layout,
});

export default rootReducer;
