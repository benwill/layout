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

  const changeHeight = useCallback(
    (e) => {
      updateProperties({
        height: e.target.value,
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

      <br />

      <select onChange={changeHeight} value={props.height}>
        <option value="100%">auto</option>
        <option value="100px">100px</option>
        <option value="200px">200px</option>
        <option value="300px">300px</option>
        <option value="400px">400px</option>
      </select>
    </div>
  );
}

export default EditBox;
