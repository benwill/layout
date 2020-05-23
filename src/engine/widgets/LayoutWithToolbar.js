import React from "react";

import styles from "./layoutWithToolbar.module.css";

function LayoutWithToolbar({
  renderArea,
  designMode,
  renderDropZone,
  componentPath,
}) {
  return (
    <div className={styles.layout}>
      hello
      <div className={styles.layout__top}>{renderArea("top")}</div>
      <div className={styles.layout__main}>{renderArea("main")}</div>
      <div className={styles.layout__right}>{renderArea("right")}</div>
    </div>
  );
}

export default LayoutWithToolbar;
