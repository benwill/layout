import React from "react";

import { Layout } from "../../engine";

// Own config
// TODO: Part of initialisation
import widgets from "../widgets";

import styles from "./preview.module.css";

const Preview = React.memo(({ canEdit, onFocus }) => {
  return (
    <div className={styles.preview}>
      <Layout widgets={widgets} canEdit={canEdit} onFocus={onFocus} />
    </div>
  );
});

export default Preview;
