import React, { useState } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import LayoutEngine from "./engine/LayoutEngine";

import "./App.css";

const initial = {
  id: 0,
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
        }
      ]
    },
    right: {
      children: [
        {
          id: 4,
          type: "SIDEBAR",
          props: {},
          areas: {
            top: {
              children: [
                {
                  id: 5,
                  type: "TEXT",
                  props: {
                    value: "abc"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
};

function App() {
  const [config, setConfig] = useState(initial);

  const onDrop = (source, target) => {
    // console.log("dragged", source, target);

    console.log('move', source, 'to', target);
    // const abc = config;
    // Find target node

    //config["areas"]["main"][0]
    // console.log('current layout', config);

    // debugger
  };

  return (
    <div className="app">
      <DragDropContextProvider backend={HTML5Backend}>
        <LayoutEngine config={config} onDrop={onDrop} />

        {/* <div
          style={{
            background: "pink"
          }}
        >
          DND Widgets
          <ul>
            <li>Text</li>
            <li>Another</li>
          </ul>
        </div> */}
      </DragDropContextProvider>
    </div>
  );
}

export default App;
