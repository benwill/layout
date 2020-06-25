import React from "react";

// Layout components
import Toolbox from "./Toolbox";
import Preview from "./Preview";
import EditWidget from "./EditWidget";

import styles from "./example.module.css";
import { useSelector } from "react-redux";

function Example({ canEdit }) {
  const editPath = useSelector((s) => s.app.editPath);

  return (
    <>
      <div className={styles.example}>
        <div className={styles.example__body}>
          <Preview canEdit={canEdit} />
          {canEdit && !editPath && <Toolbox />}
          {canEdit && editPath && <EditWidget />}
        </div>
      </div>
    </>
  );
}

export default React.memo(Example);
