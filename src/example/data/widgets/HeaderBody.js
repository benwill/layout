import React from "react";

import styles from "./headerBody.module.css";

function HeaderBody({ renderArea, renderDropZone }) {
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
    </div>
  );
}

export default HeaderBody;
