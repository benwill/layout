import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Layout } from "../../engine";
import { editCard } from "../redux/actions";

// Own config
// TODO: Part of initialisation
import widgets from "../widgets";

import styles from "./preview.module.css";

const Preview = React.memo(({ canEdit }) => {
  const dispatch = useDispatch();

  const onFocus = useCallback(
    (path) => {
      if (canEdit) {
        dispatch(editCard(path));
      }
    },
    [canEdit, dispatch]
  );

  return (
    <div className={styles.preview}>
      <Layout widgets={widgets} canEdit={canEdit} onFocus={onFocus} />
    </div>
  );
});

export default Preview;
