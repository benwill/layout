import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import styles from "./app.module.css";
import Example from "./example";

function App() {
  return (
    <div className={styles.app}>
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default App;
