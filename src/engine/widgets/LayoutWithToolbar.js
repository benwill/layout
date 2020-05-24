import React from "react";

import styles from "./layoutWithToolbar.module.css";

function LayoutWithToolbar({ renderArea, renderDropZone }) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__top}>
        {renderArea("top")}
        {renderDropZone("top")}
      </div>

      <div className={styles.layout__main}>
        {renderArea("main")}
        {renderDropZone("main")}
      </div>

      <div className={styles.layout__right}>
        {renderArea("right")}
        {renderDropZone("right")}
      </div>
    </div>
  );
}

export default LayoutWithToolbar;
