import React from "react";

import Area from "../Area";

function Sidebar({ componentPath, renderDropZone, renderArea }) {
  console.log("RENDER SIDEBAR", componentPath);
  return (
    <div
      style={{
        height: "100%",
        width: "200px",
        background: "blue",
      }}
    >
      <br /> <br /> <br />
      {renderDropZone("top", 0)}
      <br /> <br /> <br />
      {renderArea("top")}
      <br /> <br /> <br />
      {renderDropZone("top")}
      <br /> <br /> <br />
      stuff here
    </div>
  );
}

export default Sidebar;
