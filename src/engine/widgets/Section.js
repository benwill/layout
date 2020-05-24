import React from "react";

import styles from "./section.module.css";

function Section({ title, renderDropZone, renderArea }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>

      {renderArea("main")}
      {renderDropZone("main")}
    </div>
  );
}

export default Section;
