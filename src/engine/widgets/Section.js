import React from "react";

import Area from "../Area";
import styles from "./section.module.css";

function Section({ componentPath, title }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>

      <Area componentPath={componentPath} areaName="main" />
      {/* {renderArea("main")} */}
      {/* {renderDropZone("main")} */}
    </div>
  );
}

export default Section;
