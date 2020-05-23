import React from "react";
import { DropTarget } from "react-dnd";
import styles from "./dropzone.module.css";

const target = {
  canDrop(props, monitor) {
    return true;
  },

  drop(props, monitor, component) {
    const { componentPath, onDrop, targetIndex, id } = props;

    const item = monitor.getItem();
    onDrop(item, {
      targetIndex,
      id,
      componentPath,
    });

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
}) {
  const className = isOverCurrent ? styles.dropzone__active : styles.dropzone;

  return connectDropTarget(
    <span className={className + " dropzone"}>
      DZ for {id} {componentPath}
      {targetIndex}
    </span>
  );
}

export default DropTarget("A", target, collect)(DropZone);
