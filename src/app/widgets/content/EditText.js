import React, { useCallback } from "react";

function EditText({ props, updateProperties }) {
  const changeText = useCallback(
    (e) => {
      updateProperties({
        value: e.target.value,
      });
    },
    [updateProperties]
  );

  const changeStyle = useCallback(
    (e) => {
      updateProperties({
        style: e.target.value,
      });
    },
    [updateProperties]
  );

  return (
    <div>
      <input type="text" value={props.value} onChange={changeText} />

      <br />
      <select onChange={changeStyle} value={props.style}>
        <option value="default">Default</option>
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="kpi">kpi</option>
        <option value="code">code</option>
      </select>
    </div>
  );
}

export default EditText;
