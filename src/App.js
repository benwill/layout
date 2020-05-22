import React from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Example from "./Example";

import "./App.css";

function App() {
  return (
    <div className="app">
      <DragDropContextProvider backend={HTML5Backend}>
        <Example />
      </DragDropContextProvider>
    </div>
  );
}

export default App;
