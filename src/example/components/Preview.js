import React from "react";

import { Layout } from "../../engine";

// Own config
import initial from "../data/initial";
import widgets from "../data/widgets"; // todo: some kind of initialisation?

import styles from "./preview.module.css";

const Toolbox = ({ canEdit }) => {
  return (
    <div className={styles.preview}>
      <Layout initialConfig={initial} widgets={widgets} canEdit={canEdit} />
    </div>
  );
};

export default Toolbox;
