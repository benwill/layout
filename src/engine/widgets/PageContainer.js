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

function PageContainer({
  renderAreas,
  designMode,
  renderDropZone,
  componentPath
}) {
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
        {renderAreas("top")}
      </div>

      <div
        style={{
          gridArea: "main"
        }}
      >
        {renderAreas("main")}
      </div>

      <div
        style={{
          gridArea: "side"
        }}
      >
        {renderAreas("right")}
      </div>
    </div>
  );
}

export default PageContainer;
