import React from "react";
import { DropTarget } from "react-dnd";
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

function DropZone({ isOverCurrent, connectDropTarget, targetIndex }) {
  const css = classNames("dropzone", {
    dropzone__active: isOverCurrent,
  });

  return connectDropTarget(
    <span className={css}>
      Drag here to move
      {targetIndex}
    </span>
  );
}

export default DropTarget("A", target, collect)(DropZone);
