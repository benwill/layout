import React from "react";

import styles from "./row.module.css";

function Row({ height, renderArea, renderDropZone }) {
  return (
    <div
      className={styles.row}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={styles.row__left}>
        {renderArea("left")}
        {renderDropZone("left")}
      </div>

      <div className={styles.row__middle}>
        {renderArea("middle")}
        {renderDropZone("middle")}
      </div>

      <div className={styles.row__right}>
        {renderArea("right")}
        {renderDropZone("right")}
      </div>
    </div>
  );
}

export default Row;
