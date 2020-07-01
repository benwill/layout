import React, { useCallback } from "react";

function EditRow({ props, updateProperties }) {
  const changeText = useCallback(
    (e) => {
      updateProperties({
        columns: parseInt(e.target.value, 0) || 4,
      });
    },
    [updateProperties]
  );

  const changeHeight = useCallback(
    (e) => {
      updateProperties({
        height: parseInt(e.target.value, 0) || 400,
      });
    },
    [updateProperties]
  );

  return (
    <div>
      <input type="text" value={props.columns} onChange={changeText} />

      <input type="text" value={props.height} onChange={changeHeight} />
    </div>
  );
}

export default EditRow;
