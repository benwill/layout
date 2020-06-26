import React, { useCallback } from "react";

// Layout components
import Toolbox from "./Toolbox";
import Preview from "./Preview";
import EditWidget from "./EditWidget";

import styles from "./example.module.css";
import { useSelector, useDispatch } from "react-redux";
import { focusCard } from "../redux/actions";

function Example({ canEdit }) {
  const editPath = useSelector((s) => s.app.editPath);
  const dispatch = useDispatch();

  const onFocus = useCallback(
    (path) => {
      dispatch(focusCard(path));
    },
    [dispatch]
  );

  return (
    <>
      <div className={styles.example}>
        <div className={styles.example__body}>
          <Preview canEdit={canEdit} onFocus={onFocus} />
          {canEdit && !editPath && <Toolbox />}
          {canEdit && editPath && (
            <EditWidget editPath={editPath} onFocus={onFocus} />
          )}
        </div>
      </div>
    </>
  );
}

export default React.memo(Example);
