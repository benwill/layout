import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import React, { useCallback } from "react";

import widgets from "./widgets";
import dotProp from "dot-prop-immutable";
import {
  changeProperties,
  startDragging,
  stopDragging,
  moveItem,
} from "../example/actions";

import Draggable from "./Draggable";
import DropZone from "./DropZone";
import Area from "./Area";

const Component = React.memo(({ componentPath }) => {
  console.log("RENDERING", componentPath);
  const props = useSelector((state) => {
    const comp = dotProp.get(state.layout.config, componentPath);
    return comp.props;
  });

  const type = useSelector((state) => {
    return dotProp.get(state.layout.config, componentPath).type;
  });

  const dispatch = useDispatch();

  const updateProperties = useCallback(
    (properties) => {
      dispatch(changeProperties(componentPath, properties));
    },
    [componentPath, dispatch]
  );

  const onStartDrag = useCallback(() => {
    dispatch(startDragging());
  }, [dispatch]);

  const onDrop = useCallback(
    (sourcePath, targetPath, targetIndex) => {
      dispatch(moveItem(sourcePath, targetPath, targetIndex));
    },
    [dispatch]
  );

  const onStopDrag = useCallback(() => {
    dispatch(stopDragging());
  }, [dispatch]);

  const renderDropZone = useCallback(
    (areaName, targetIndex) => {
      return (
        <DropZone
          componentPath={componentPath}
          areaName={areaName}
          targetIndex={targetIndex}
          onDrop={onDrop}
        />
      );
    },
    [onDrop, componentPath]
  );

  const renderArea = useCallback(
    (areaName) => {
      return <Area componentPath={componentPath} areaName={areaName} />;
    },
    [componentPath]
  );

  const { component: ReactComponent, canDrag } = widgets[type];

  const component = (
    <ReactComponent
      {...props}
      // renderArea={renderArea}
      updateProperties={updateProperties}
      renderDropZone={renderDropZone}
      renderArea={renderArea}
      canDrag={canDrag}
    />
  );

  return canDrag ? (
    <Draggable
      //   id={id}
      type={type}
      componentPath={componentPath}
      onStartDrag={onStartDrag}
      onStopDrag={onStopDrag}
    >
      {component}
    </Draggable>
  ) : (
    component
  );
});

export default Component;
