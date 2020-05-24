import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropTarget } from "react-dnd";
import styles from "./dropzone.module.css";
import classNames from "classnames";

const target = {
  canDrop(props, monitor) {
    return true;
  },

  drop(props, monitor, component) {
    const { componentPath, onDrop, targetIndex, areaName } = props;

    const dropZonePath = `${componentPath}.areas.${areaName}`;

    const item = monitor.getItem();
    onDrop(item.componentPath, dropZonePath, targetIndex);

    return { moved: true };
  },
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  };
}

function DropZone({
  id,
  isOverCurrent,
  connectDropTarget,
  targetIndex,
  componentPath,
  areaName,
}) {
  const css = classNames("dropzone", {
    [styles.dropzone__active]: isOverCurrent,
  });

  const dropZonePath = `${componentPath}.areas.${areaName}`;

  return connectDropTarget(
    <span className={css}>
      DZ for {dropZonePath} areas
      {targetIndex}
    </span>
  );
}

export default DropTarget("A", target, collect)(DropZone);
