import React, { useCallback } from "react";

function EditImage({ props, updateProperties }) {
  const changeValue = useCallback(
    (e) => {
      updateProperties({
        image: e.target.value,
      });
    },
    [updateProperties]
  );

  return (
    <div>
      <select onChange={changeValue} value={props.image}>
        <option value="cat1">Cat 1</option>
        <option value="cat2">Cat 2</option>
        <option value="cat3">Cat 3</option>
        <option value="dog1">Dog 1</option>
        <option value="dog2">Dog 2</option>
        <option value="dog3">Dog 3</option>
      </select>
    </div>
  );
}

export default EditImage;
