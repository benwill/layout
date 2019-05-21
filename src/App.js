import React from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import "./App.css";

import LayoutEngine from "./engine/LayoutEngine";

function App() {
  const config = {
    type: "PAGE",
    areas: {
      top: {
        children: [
          {
            id: 1,
            props: {},
            type: "TOOLBAR"
          }
        ]
      },
      main: {
        children: [
          {
            id: 2,
            type: "TEXT",
            props: {
              value: "hello world"
            }
          },
          {
            id: 3,
            type: "TEXT",
            props: {
              value: "another hello world"
            }
          }
        ]
      },
      right: {
        children: [
          {
            id: 4,
            type: "SIDEBAR",
            props: {}
          }
        ]
      }
    }
  };
  return (
    <div className="app">
      <DragDropContextProvider backend={HTML5Backend}>
        <LayoutEngine config={config} />

        <div
          style={{
            background: "pink"
          }}
        >
          DND Widgets
          <ul>
            <li>Text</li>
            <li>Another</li>
          </ul>
        </div>
      </DragDropContextProvider>
    </div>
  );
}

export default App;
