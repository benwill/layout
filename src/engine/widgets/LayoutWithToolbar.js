import React from "react";

import styles from "./layoutWithToolbar.module.css";
import Area from "../Area";
import ReduxComponent from "../ReduxComponent";

function LayoutWithToolbar({ componentPath }) {
  console.log("RENDER LAYOUT WITH TOOLBAR", componentPath);
  return (
    <div className={styles.layout}>
      <div className={styles.layout__top}>
        {/* <ReduxComponent componentPath={"root.areas.top.0"} /> */}
        <Area componentPath={componentPath} areaName="top" />
      </div>

      <div className={styles.layout__main}>
        {/* <ReduxComponent componentPath={"root.areas.main.0"} /> */}
        <Area componentPath={componentPath} areaName="main" />
      </div>

      <div className={styles.layout__right}>
        {/* <ReduxComponent componentPath={"root.areas.right.0"} /> */}
        <Area componentPath={componentPath} areaName="right" />
      </div>
    </div>
  );
}

export default LayoutWithToolbar;
