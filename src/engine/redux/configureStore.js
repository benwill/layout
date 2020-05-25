import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

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
