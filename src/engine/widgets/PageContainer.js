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

function PageContainer({ id, areas, renderArea, designMode, renderDropZone, path }) {
  const css = designMode ? design : runtime;

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
        {renderDropZone(id, path, 'top', true)}
        {renderArea(areas, path, 'top')}
        {renderDropZone(id, path, 'bottom', false)}
      </div>

      <div
        style={{
          gridArea: "main"
        }}
      >
        {renderArea(areas, path, "main")}
      </div>

      <div
        style={{
          gridArea: "side"
        }}
      >
        {renderArea(areas, path, "right")}
      </div>
    </div>
  );
}

export default PageContainer;
