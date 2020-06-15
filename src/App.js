import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Provider } from "react-redux";

import styles from "./app.module.css";
import "bulma/css/bulma.css";

import configureStore from "./store";

// Demo site
import Header from "./app/Header";
import Body from "./app/Body";

const store = configureStore();

function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <DndProvider backend={Backend}>
          <Header />
          <Body />
        </DndProvider>
      </Provider>
    </div>
  );
}

export default App;
