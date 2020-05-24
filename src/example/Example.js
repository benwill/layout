import React from "react";

import { Provider } from "react-redux";
import configureStore from "./configureStore";
import LayoutEngine from "../engine/LayoutEngine";

import "./example.css";

const store = configureStore();

function Example() {
  return (
    <Provider store={store}>
      <LayoutEngine />
    </Provider>
  );
}

export default React.memo(Example);
