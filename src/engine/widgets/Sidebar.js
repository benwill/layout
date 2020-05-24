import React from "react";
import styles from "./sidebar.module.css";

function Sidebar({ renderDropZone, renderArea }) {
  return (
    <div className={styles.sidebar}>
      <br /> <br /> <br />
      {renderDropZone("top", 0)}
      <br /> <br /> <br />
      {renderArea("top")}
      <br /> <br /> <br />
      {renderDropZone("top")}
      <br /> <br /> <br />
    </div>
  );
}

export default Sidebar;
