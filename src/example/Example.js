import React, { useState, useCallback } from "react";

import { LayoutProvider } from "../engine";

// Layout components
import Header from "./components/Header";
import Toolbox from "./components/Toolbox";
import Preview from "./components/Preview";

import styles from "./example.module.css";

// Example configs
import tree from "./data/tree";
import dashboard from "./data/dashboard";

const examples = {
  tree,
  dashboard,
};

function Example() {
  const [canEdit, setCanEdit] = useState(true);
  const [example, setExample] = useState("dashboard");

  const initialData = examples[example];

  console.log(example, initialData);
  const onToggle = useCallback(() => {
    setCanEdit(!canEdit);
  }, [canEdit, setCanEdit]);

  const changeExample = useCallback(
    (example) => {
      setExample(example);
      console.log("changing to", example);
    },
    [setExample]
  );

  return (
    <div className={styles.example}>
      <LayoutProvider>
        <Header
          onToggle={onToggle}
          isDesignMode={canEdit}
          example={example}
          changeExample={changeExample}
        />

        <div className={styles.example__body}>
          <Preview canEdit={canEdit} initialData={initialData} />
          {canEdit && <Toolbox />}
        </div>
      </LayoutProvider>
    </div>
  );
}

export default React.memo(Example);
