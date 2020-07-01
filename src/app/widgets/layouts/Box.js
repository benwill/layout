import React from "react";

import styles from "./box.module.css";

function Box({ renderArea, renderDropZone }) {
  return (
    <div
      className={`${styles.box} box`}
      style={{
        height: "300px",
      }}
    >
      {renderArea("main")}
      {renderDropZone("main")}
    </div>
  );
}

export default Box;
