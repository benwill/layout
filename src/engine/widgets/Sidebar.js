import React from "react";

function Sidebar({ renderArea, renderDropZone }) {
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
      {renderArea("top")}
      <br /> <br /> <br />
      {/* {renderDropZone("top")} */}
      <br /> <br /> <br />
      stuff here
    </div>
  );
}

export default Sidebar;
