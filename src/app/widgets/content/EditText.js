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

  return (
    <div>
      <input type="text" value={props.value} onChange={changeText} />
    </div>
  );
}

export default EditText;
