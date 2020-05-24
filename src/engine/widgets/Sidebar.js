import React from "react";

import Area from "../Area";
import DropZone from "../DropZone";

function Sidebar({ componentPath, onDrop }) {
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
      <DropZone
        componentPath={componentPath}
        areaName="top"
        onDrop={onDrop}
        targetIndex={0}
      />
      <br /> <br /> <br />
      <Area componentPath={componentPath} areaName="top" />
      <br /> <br /> <br />
      <DropZone componentPath={componentPath} areaName="top" onDrop={onDrop} />
      <br /> <br /> <br />
      stuff here
    </div>
  );
}

export default Sidebar;
