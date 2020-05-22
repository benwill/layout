import React from "react";

function Section({ renderAreas, renderDropZone }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "pink"
      }}
    >
      <br /> <br /> <br />
      {renderAreas("main")}
      <br /> <br /> <br />
      {renderDropZone("main", false)}
      <br /> <br /> <br />
    </div>
  );
}

export default Section;
