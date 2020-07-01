import React, { useCallback } from "react";
import dotProp from "dot-prop-immutable";

import styles from "./editwidget.module.css";

import widgets from "../widgets";
import { useSelector, useDispatch } from "react-redux";

import { changeProperties, removeItem } from "../../engine";
import { focusCard } from "../redux/actions";

const EditWidget = ({ editPath }) => {
  const dispatch = useDispatch();

  const editProps = useSelector((s) => {
    const config = s.layout.config;
    const { type, props } = dotProp.get(config, editPath);

    return {
      type,
      props,
    };
  });

  const updateProperties = useCallback(
    (props) => {
      dispatch(changeProperties(editPath, props));
    },
    [dispatch, editPath]
  );

  const componentType = widgets[editProps.type];

  const EditComponent = !componentType.edit ? null : componentType.edit;

  const onFocus = useCallback(
    (path) => {
      dispatch(focusCard(undefined));
    },
    [dispatch]
  );

  const onRemove = useCallback(() => {
    dispatch(focusCard(undefined));
    dispatch(removeItem({ sourcePath: editPath }));
  }, [dispatch, editPath]);

  return (
    <div className={styles.edit}>
      <h2 className="title is-4">
        Edit Widget{" "}
        <div>
          <span
            className={`icon icon-medium ${styles.edit__remove}`}
            onClick={onRemove}
          >
            <i className="fas fa-dumpster"></i>
          </span>
          <span className="icon icon-medium margin-left-1" onClick={onFocus}>
            <i className="fas fa-times"></i>
          </span>
        </div>
      </h2>
      {editPath}

      <hr />
      {editProps.type.toString()}
      {JSON.stringify(editProps.props, 0, 2)}

      {EditComponent && (
        <EditComponent {...editProps} updateProperties={updateProperties} />
      )}
    </div>
  );
};

export default EditWidget;
