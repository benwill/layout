import React, { useCallback } from "react";

function EditChart({ props, updateProperties }) {
  const changeValue = useCallback(
    (e) => {
      updateProperties({
        type: e.target.value,
      });
    },
    [updateProperties]
  );

  return (
    <div>
      <select onChange={changeValue} value={props.type}>
        <option value="Pie">Pie Chart</option>
        <option value="Line">Line Chart</option>
      </select>
    </div>
  );
}

export default EditChart;
