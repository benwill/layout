import React from "react";

import Area from "../Area";
import styles from "./section.module.css";

import ReduxComponent from "../ReduxComponent";

function Section({ componentPath, title }) {
  console.log("RENDER SECTION", componentPath);
  return (
    <div className={styles.section}>
      <h2>{title}</h2>

      {/* <ReduxComponent componentPath={"root.areas.main.0.areas.main.0"} /> */}

      <Area componentPath={componentPath} areaName="main" />

      {/* {renderArea("main")} */}
      {/* {renderDropZone("main")} */}
    </div>
  );
}

export default Section;
