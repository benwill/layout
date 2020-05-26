import React, { useState, useCallback } from "react";

import { LayoutProvider } from "../engine";

// Layout components
import Header from "./components/Header";
import Toolbox from "./components/Toolbox";
import Preview from "./components/Preview";

import styles from "./example.module.css";

function Example() {
  const [canEdit, setCanEdit] = useState(true);

  const onToggle = useCallback(() => {
    setCanEdit(!canEdit);
  }, [canEdit, setCanEdit]);

  return (
    <div className={styles.example}>
      <LayoutProvider>
        <Header onToggle={onToggle} isDesignMode={canEdit} />

        <div className={styles.example__body}>
          <Preview canEdit={canEdit} />
          {canEdit && <Toolbox />}
        </div>
      </LayoutProvider>
    </div>
  );
}

export default React.memo(Example);
