import React from "react";

import styles from "./standard.module.css";

function Standard({ renderArea, renderDropZone, sidePanelStyle }) {
  const sidePanelStyles =
    sidePanelStyle === "right" ? styles.layout__right : styles.layout__left;

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

      {sidePanelStyle !== "" ? (
        <div className={`${sidePanelStyles} right-panel-overrides`}>
          {renderArea("sidepanel")}
          {renderDropZone("sidepanel")}
        </div>
      ) : null}
    </div>
  );
}

export default Standard;
