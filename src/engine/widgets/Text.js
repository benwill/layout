import React from "react";

function Text({ value, updateProperties }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={(x) => updateProperties({ value: x.target.value })}
      />
    </div>
  );
}

export default Text;
