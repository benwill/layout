import React from "react";

import { Layout } from "../../engine";

// Own config
import widgets from "../data/widgets"; // todo: some kind of initialisation?

import styles from "./preview.module.css";

const Toolbox = ({ canEdit, initialData }) => {
  return (
    <div className={styles.preview}>
      <Layout initialConfig={initialData} widgets={widgets} canEdit={canEdit} />
    </div>
  );
};

export default Toolbox;
