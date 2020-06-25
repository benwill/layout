import React from "react";

import styles from "./editwidget.module.css";

import widgets from "../widgets";
import { useSelector } from "react-redux";

const EditWidget = ({ editPath }) => {
  return (
    <div className={styles.edit}>
      {/*   */}
      <h2 className="title is-4">Edit Widget</h2>
      todo {editPath}
    </div>
  );
};

export default EditWidget;
