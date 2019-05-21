import React from "react";
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from "react-dnd";
const { useDrop } = dnd;

const runtime = {
  gridTemplateColumns: "1fr auto",
  gridTemplateRows: "auto 1fr"
};

const design = {
  gridTemplateColumns: "1fr minmax(50px, auto)",
  gridTemplateRows: "minmax(100px, auto) 1fr"
};

const target = {
  canDrop(props, monitor) {
    return true;
  },

  drop(props, monitor, component) {
    console.log("DROPPED ON");
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

function PageContainer({ id, areas, renderArea, designMode, renderDropZone }) {
  const css = designMode ? design : runtime;

  const [collectedProps, drop] = useDrop({
    accept: 'A',
    drop: () => {
      console.log("dropped");
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div
      style={{
        display: "grid",
        flex: "1",
        gridTemplateAreas: "'top side' 'main side'",
        ...css
      }}
    >
      <div
        style={{
          gridArea: "top"
        }}
      >
        {renderDropZone(id, 'top', true)}
        {renderArea(areas.top)}
        {renderDropZone(id, 'bottom', false)}
      </div>

      <div
        style={{
          gridArea: "main"
        }}
      >
        {renderArea(areas.main)}
      </div>

      <div
        style={{
          gridArea: "side"
        }}
      >
        {renderArea(areas.right)}
      </div>
    </div>
  );
}

export default PageContainer;
