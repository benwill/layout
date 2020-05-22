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
      <br /> <br /> <br />
      {renderDropZone("top", true)}
      <br /> <br /> <br />
      {renderAreas("top")}
      <br /> <br /> <br />
      {renderDropZone("top", false)}
      <br /> <br /> <br />
      stuff here
    </div>
  );
}

export default Sidebar;
