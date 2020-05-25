import { combineReducers } from "redux";
import { reducer as layout } from "../engine";

const rootReducer = combineReducers({
  layout,
});

export default rootReducer;
