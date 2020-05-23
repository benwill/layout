import React from "react";

import styles from "./layoutWithToolbar.module.css";
import Area from "../Area";

function LayoutWithToolbar({
  renderArea,
  designMode,
  renderDropZone,
  componentPath,
}) {
  return (
    <div className={styles.layout}>
      <Area componentPath={componentPath} areaName="top" />
      <Area componentPath={componentPath} areaName="main" />
      <Area componentPath={componentPath} areaName="right" />
    </div>
  );
}

export default LayoutWithToolbar;
