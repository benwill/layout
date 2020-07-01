import React from "react";

import styles from "./row.module.css";

function Row({ height, renderArea, renderDropZone, columns = 4, canEdit }) {
  const edit = canEdit ? styles.row__edit : null;

  return (
    <div
      className={`${styles.row} ${edit}`}
      style={{
        height: `${height}px`,
      }}
    >
      {[...Array(columns)].map((_, i) => {
        const counter = i + 1;

        return (
          <div className={styles.column}>
            {renderArea(`main_${counter}`)}
            {renderDropZone(`main_${counter}`)}
          </div>
        );
      })}
    </div>
  );
}

export default Row;
