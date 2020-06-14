import React, { useState, useCallback, useRef } from "react";

import { LayoutProvider } from "../engine";

// Layout components
import Header from "./components/Header";
import Toolbox from "./components/Toolbox";
import Preview from "./components/Preview";

import styles from "./example.module.css";

// Example configs
import tree from "./data/tree";
import dashboard from "./data/dashboard";

function Example() {
  const layoutRef = useRef();
  const [examples, setExamples] = useState({
    tree,
    dashboard,
  });
  const [canEdit, setCanEdit] = useState(true);
  const [example, setExample] = useState("tree");
  const [focusedWidgetId, setFocusedWidgetId] = useState();

  const initialData = examples[example];

  const onToggle = useCallback(() => {
    setCanEdit(!canEdit);
    const updatedState = layoutRef.current.getState();
    setExamples({
      ...examples,
      [example]: updatedState,
    });
  }, [canEdit, setCanEdit, example, examples, setExamples]);

  const changeExample = useCallback(
    (example) => {
      setExample(example);
      console.log("changing to", example);
    },
    [setExample]
  );

  return (
    <div className={styles.example}>
      <LayoutProvider ref={layoutRef}>
        <Header
          onToggle={onToggle}
          isDesignMode={canEdit}
          example={example}
          changeExample={changeExample}
        />

        <div className={styles.example__body}>
          <Preview
            canEdit={canEdit}
            initialData={initialData}
            onFocus={setFocusedWidgetId}
          />
          {canEdit && <Toolbox />}
        </div>
      </LayoutProvider>
    </div>
  );
}

export default React.memo(Example);
