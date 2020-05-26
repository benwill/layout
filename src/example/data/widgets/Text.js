import React from "react";

function Text({ value, updateProperties, canEdit }) {
  return (
    <div>
      {canEdit ? (
        <textarea
          value={value}
          onChange={(x) => updateProperties({ value: x.target.value })}
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default Text;
