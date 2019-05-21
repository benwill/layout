import React from "react";
import { DropTarget } from "react-dnd";

const target = {
  canDrop(props, monitor) {
    return true;
  },

  drop(props, monitor, component) {
    console.log("dropped item");
    return { moved: true };
  }
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
    itemType: monitor.getItemType()
  };
}

function DropZone({ id, area, before, onDrop, connectDropTarget }) {
  //onDrop
  return connectDropTarget(
    <span>
      dz for {id} - {area} - {before.toString()}
    </span>
  );
}

export default DropTarget("A", target, collect)(DropZone);
