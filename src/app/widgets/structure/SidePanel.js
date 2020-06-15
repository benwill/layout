import React from "react";
import styles from "./sidepanel.module.css";

function SidePanel({ renderDropZone, renderArea, canEdit }) {
  if (!canEdit) return null;

  return <div className={styles.sidebar}>TODO Content inside</div>;
}

export default SidePanel;
