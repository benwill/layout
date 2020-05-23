import React from "react";

import styles from "./section.module.css";

function Section({ renderAreas, renderDropZone, title }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>

      {renderAreas("main")}
      {renderDropZone("main", false)}
    </div>
  );
}

export default Section;
