import React from "react";
import { DragSource } from "react-dnd";

const source = {
  canDrag(props) {
    return true;
  },
  beginDrag: (props) => {
    return {
      id: props.id,
      type: props.type,
      componentPath: props.componentPath
    }
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

const Widget = DragSource("A", source, collect)(
  ({ connectDragSource, children }) => {
    return connectDragSource(<div>{children}</div>);
  }
);

export default Widget;
