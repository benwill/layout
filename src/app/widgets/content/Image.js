import React from "react";

import styles from "./image.module.css";

function Image({ image = "animal4" }) {
  return <div className={styles[image]}></div>;
}

export default Image;
