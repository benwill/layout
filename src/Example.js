import React, { useState } from "react";
import dotProp from "dot-prop-immutable";
import shortid from "shortid";

import LayoutEngine from "./engine/LayoutEngine";

import "./App.css";

const initial = {
  root: [
    {
      id: shortid.generate(),
      type: "PAGE",
      areas: {
        top: [
          {
            id: shortid.generate(),
            props: {},
            type: "TOOLBAR"
          }
        ],
        main: [
          {
            id: shortid.generate(),
            type: "SECTION",
            props: {
              value: "Section title"
            },
            areas: {
              main: [
                {
                  id: shortid.generate(),
                  type: "TEXT",
                  props: {
                    value: "hello world"
                  }
                }
              ]
            }
          }
        ],
        right: [
          {
            id: shortid.generate(),
            type: "SIDEBAR",
            props: {},
            areas: {
              top: [
                {
                  id: shortid.generate(),
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
};

function Example() {
  const [config, setConfig] = useState(initial);

  const onDrop = (source, target) => {
    console.log("move", source, "to", target);

    // Delete original
    const itemToMove = dotProp.get(config, source.componentPath);

    let newConfig = dotProp.delete(config, source.componentPath);

    // Move to new dropzone
    const itemArrayPath = target.componentPath + `.areas.${target.position}`; // TODO: Passed from dropzone?
    const items = dotProp.get(newConfig, itemArrayPath);

    const newItems = target.before
      ? [itemToMove, ...items]
      : [...items, itemToMove];

    newConfig = dotProp.set(newConfig, itemArrayPath, newItems);

    setConfig(newConfig);
  };

  return (
    <div className="app">
      <LayoutEngine config={config} onDrop={onDrop} />
    </div>
  );
}

export default Example;
