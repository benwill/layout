import React from "react";

import Area from "../Area";

function Sidebar({ componentPath, renderDropZone }) {
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
      {/* {renderDropZone("top", 0)} */}
      <br /> <br /> <br />
      {/* <Area componentPath={componentPath} areaName="top" /> */}
      <br /> <br /> <br />
      {/* {renderDropZone("top")} */}
      <br /> <br /> <br />
      stuff here
    </div>
  );
}

export default Sidebar;
