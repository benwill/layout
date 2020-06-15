import React from "react";

// Layout components
import Toolbox from "./Toolbox";
import Preview from "./Preview";

import styles from "./example.module.css";

function Example({ canEdit }) {
  return (
    <>
      <div className={styles.example}>
        <div className={styles.example__body}>
          <Preview canEdit={canEdit} />
          {canEdit && <Toolbox />}
        </div>
      </div>
    </>
  );
}

export default React.memo(Example);
