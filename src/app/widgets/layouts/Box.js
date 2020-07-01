import React from "react";

import styles from "./box.module.css";

function Box({ renderArea, renderDropZone, background = "", height = "100%" }) {
  return (
    <div
      className={`${styles.box} box ${background}`}
      style={{
        height,
      }}
    >
      {renderArea("main")}
      {renderDropZone("main")}
    </div>
  );
}

export default Box;
