import React, { useCallback } from "react";
import { DragSource } from "react-dnd";
import { useDispatch } from "react-redux";

import { startDragging, stopDragging } from "./redux/actions";

const source = {
  canDrag(props) {
    return true;
  },
  beginDrag: (props) => {
    props.onStartDrag();
    return {
      id: props.id,
      type: props.type,
      componentPath: props.componentPath,
      props: props.props,
      areas: props.areas,
    };
  },
  endDrag: (props) => {
    props.onStopDrag();
  },
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging(),
  };
}

const Drag = DragSource(
  "A",
  source,
  collect
)(({ connectDragSource, children }) => {
  return connectDragSource(<div className="draggable">{children}</div>);
});

const Draggable = ({ children, type, areas, componentPath, props }) => {
  const dispatch = useDispatch();

  const onStartDrag = useCallback(() => {
    dispatch(startDragging());
  }, [dispatch]);

  const onStopDrag = useCallback(() => {
    dispatch(stopDragging());
  }, [dispatch]);

  return (
    <Drag
      onStartDrag={onStartDrag}
      onStopDrag={onStopDrag}
      type={type}
      componentPath={componentPath}
      props={props}
      areas={areas}
    >
      {children}
    </Drag>
  );
};

export default Draggable;
