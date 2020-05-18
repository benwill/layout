import React, { useState } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import dotProp from "dot-prop-immutable";

import LayoutEngine from "./engine/LayoutEngine";

import "./App.css";

const initial = {
  root: [
    {
      id: 0,
      type: "PAGE",
      areas: {
        top: [
          {
            id: 1,
            props: {},
            type: "TOOLBAR"
          }],
        main: [
          {
            id: 0,
            type: "TEXT",
            props: {
              value: "hello world"
            }
          },
          {
            id: 23,
            type: "TEXT",
            props: {
              value: "hello world"
            }
          }
        ],
        right: [
          {
            id: 4,
            type: "SIDEBAR",
            props: {},
            areas: {
              top: [
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
        ]
      }
    }
  ]
}

function App() {
  const [config, setConfig] = useState(initial);

  const onDrop = (source, target) => {
    // console.log("dragged", source, target);

    console.log('move', source, 'to', target);


    let stateToDelete = undefined;

    source.componentPath.forEach((level, idx) => {


      // TODO: Must be a nicer way!!!.
      // TODO: Possibly just store in an ordered object?
      const areaName = Object.keys(level)[0]
      const componentId = Object.values(level)[0]

      // TODO: CHANGE TO INDEX
      stateToDelete = idx === 0 ? `${areaName}.${componentId}` : `${stateToDelete}.areas.${areaName}.${componentId}`;
      // `${stateToDelete ? stateToDelete + "." : ""}areas.${areaName}.${componentId}`;

      // node = config.level.

    })

    console.log('done', stateToDelete);

    const newConfig = dotProp.delete(initial, stateToDelete)

    console.log(newConfig);

    setConfig(newConfig);
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
