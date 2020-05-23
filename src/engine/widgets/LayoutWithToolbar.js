import React from "react";

import styles from "./layoutWithToolbar.module.css";

function LayoutWithToolbar({
  renderAreas,
  designMode,
  renderDropZone,
  componentPath,
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__top}>{renderAreas("top")}</div>

      <div className={styles.layout__main}>{renderAreas("main")}</div>

      <div className={styles.layout__right}>{renderAreas("right")}</div>
    </div>
  );
}

export default LayoutWithToolbar;
