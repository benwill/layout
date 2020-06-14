import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import React, { useCallback } from "react";

import dotProp from "dot-prop-immutable";
import {
  changeProperties,
  addItem,
  moveItem,
  removeItem,
} from "./redux/actions";

import Draggable from "./Draggable";
import DropZone from "./DropZone";
import Area from "./Area";

const Component = React.memo(({ componentPath, widgets }) => {
  console.log("RENDERING", componentPath);

  const props = useSelector((state) => {
    const comp = dotProp.get(state.layout.config, componentPath);
    return comp.props;
  });

  const type = useSelector((state) => {
    return dotProp.get(state.layout.config, componentPath).type;
  });

  const canEdit = useSelector((state) => {
    return state.layout.canEdit;
  });

  const dispatch = useDispatch();

  const updateProperties = useCallback(
    (properties) => {
      dispatch(changeProperties(componentPath, properties));
    },
    [componentPath, dispatch]
  );

  const onDrop = useCallback(
    (source, target, isMove) => {
      if (isMove) {
        dispatch(moveItem(source, target));
      } else {
        dispatch(addItem(source, target));
      }
    },
    [dispatch]
  );

  const onRemove = useCallback(() => {
    dispatch(removeItem({ sourcePath: componentPath }));
  }, [dispatch, componentPath]);

  const renderDropZone = useCallback(
    (areaName, targetIndex) => {
      if (!canEdit) return null;
      return (
        <DropZone
          componentPath={componentPath}
          areaName={areaName}
          targetIndex={targetIndex}
          onDrop={onDrop}
        />
      );
    },
    [onDrop, componentPath, canEdit]
  );

  const renderArea = useCallback(
    (areaName) => {
      return (
        <Area
          componentPath={componentPath}
          areaName={areaName}
          widgets={widgets}
        />
      );
    },
    [componentPath, widgets]
  );

  const { component: ReactComponent, canDrag } = widgets[type];

  const css = classNames("component", `component__${type}`, {
    "component--draggable": canDrag && canEdit,
  });

  const component = (
    <div className={css}>
      <ReactComponent
        {...props}
        canEdit={canEdit}
        onRemove={onRemove}
        updateProperties={updateProperties}
        renderDropZone={renderDropZone}
        renderArea={renderArea}
        canDrag={canDrag}
      />
    </div>
  );

  return canDrag && canEdit ? (
    <Draggable type={type} componentPath={componentPath}>
      {component}
    </Draggable>
  ) : (
    component
  );
});

export default Component;
