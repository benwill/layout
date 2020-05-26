import React from "react";

import { Draggable } from "../../engine";
import styles from "./toolbox.module.css";

const Toolbox = () => {
  return (
    <div className={styles.toolbox}>
      <h2 className="title is-4">Toolbox</h2>

      <ul>
        <li>
          <Draggable
            type="TEXT"
            props={{
              value: "h2344",
            }}
          >
            <div>Add text</div>
          </Draggable>
        </li>
        <li>
          <Draggable
            type="SECTION"
            props={{
              title: "new section",
            }}
          >
            <div>Add section</div>
          </Draggable>
        </li>
      </ul>
    </div>
  );
};

export default Toolbox;
