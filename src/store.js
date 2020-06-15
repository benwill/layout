import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createLogger } from "redux-logger";

import { reducer } from "./engine";
import appReducer from "./app/redux/reducer";

const rootReducer = combineReducers({
  layout: reducer,
  app: appReducer,
  // any other app specific reducers
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const loggerMiddleware = createLogger();

const enhancer = composeEnhancers();
//   applyMiddleware(loggerMiddleware)
// other store enhancers if any

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, enhancer);
}
