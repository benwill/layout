import React from "react";

function Text({ value, updateProperty }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={(x) => updateProperty({ value: x.target.value })}
      />
    </div>
  );
}

export default Text;
