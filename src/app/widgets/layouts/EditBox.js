import React, { useCallback } from "react";

function EditBox({ props, updateProperties }) {
  const changeValue = useCallback(
    (e) => {
      updateProperties({
        background: e.target.value,
      });
    },
    [updateProperties]
  );

  return (
    <div>
      <select onChange={changeValue} value={props.background}>
        <option value="">None</option>
        <option value="has-background-info">Blue</option>
        <option value="has-background-success">Green</option>
        <option value="has-background-warning">Yellow</option>
        <option value="has-background-danger">Red</option>
        <option value="has-background-primary">Aqua</option>
      </select>
    </div>
  );
}

export default EditBox;
