import React from "react";

import Area from "../Area";
import styles from "./section.module.css";

import DropZone from "../DropZone";

function Section({ componentPath, title, onDrop }) {
  console.log("RENDER SECTION", componentPath);
  return (
    <div className={styles.section}>
      <h2>{title}</h2>

      <Area componentPath={componentPath} areaName="main" />

      <DropZone componentPath={componentPath} areaName="main" onDrop={onDrop} />
    </div>
  );
}

export default Section;
