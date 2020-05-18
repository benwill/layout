import React from "react";

function Sidebar({ renderAreas, renderDropZone }) {
  return (
    <div
      style={{
        height: "100%",
        width: "200px",
        background: "blue"
      }}
    >
      sidebar

      {renderAreas('top')}
      {renderDropZone('top', false)}
    </div>
  );
}

export default Sidebar;
