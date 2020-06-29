import React, { useCallback } from "react";
import dotProp from "dot-prop-immutable";

import styles from "./editwidget.module.css";

import widgets from "../widgets";
import { useSelector, useDispatch } from "react-redux";

import { changeProperties } from "../../engine";
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

  console.log(editProps);

  const componentType = widgets[editProps.type];

  const EditComponent = !componentType.edit ? null : componentType.edit;

  const onFocus = useCallback(
    (path) => {
      dispatch(focusCard(undefined));
    },
    [dispatch]
  );

  return (
    <div className={styles.edit}>
      <h2 className="title is-4">
        Edit Widget{" "}
        <span className="icon icon-medium" onClick={onFocus}>
          <i className="fas fa-times"></i>
        </span>
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