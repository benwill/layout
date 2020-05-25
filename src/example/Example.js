import React from "react";

import { Provider } from "react-redux";
import configureStore from "./configureStore";
import LayoutEngine from "../engine/LayoutEngine";

// Own config
import initial from "./initial";
import widgets from "./widgets"; // todo: some kind of initialisation?

import "./example.css";

// Initialize components
// e.g. text, sidepanels etce.etc.etc

// Initialize extra middleware/reducers
const store = configureStore();

// Set up initial config?

function Example() {
  return (
    <Provider store={store}>
      <LayoutEngine initialConfig={initial} widgets={widgets} />
    </Provider>
  );
}

export default React.memo(Example);
