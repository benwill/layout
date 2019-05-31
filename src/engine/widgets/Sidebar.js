import React from "react";

function Sidebar({ renderArea, path, areas }) {
  return (
    <div
      style={{
        height: "100%",
        width: "200px",
        background: "blue"
      }}
    >
      sidebar

      {renderArea(areas, path, 'top')}
    </div>
  );
}

export default Sidebar;
