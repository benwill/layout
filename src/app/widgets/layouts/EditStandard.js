import React, { useCallback } from "react";

function EditStandard({ props, updateProperties }) {
  const changeStyle = useCallback(
    (e) => {
      updateProperties({
        sidePanelStyle: e.target.value,
      });
    },
    [updateProperties]
  );

  return (
    <div>
      <select onChange={changeStyle} value={props.sidePanelStyle}>
        <option value="">None</option>
        <option value="right">Right</option>
        <option value="left">Left</option>
      </select>
    </div>
  );
}

export default EditStandard;
