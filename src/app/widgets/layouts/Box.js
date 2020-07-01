import React from "react";

import styles from "./box.module.css";

function Box({ renderArea, renderDropZone, background = "" }) {
  return (
    <div
      className={`${styles.box} box ${background}`}
      style={{
        height: "100%",
      }}
    >
      {renderArea("main")}
      {renderDropZone("main")}
    </div>
  );
}

export default Box;
