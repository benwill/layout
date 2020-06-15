import React from "react";

import { Layout } from "../../engine";

// Own config
// TODO: Part of initialisation
import widgets from "../widgets";

import styles from "./preview.module.css";

const Preview = ({ canEdit }) => {
  const onFocus = (a) => {
    console.log("focused", a);
  };
  return (
    <div className={styles.preview}>
      <Layout widgets={widgets} canEdit={canEdit} onFocus={onFocus} />
    </div>
  );
};

export default Preview;
