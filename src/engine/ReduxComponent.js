import { useSelector, useDispatch } from "react-redux";
import React from "react";

import { changeProperties } from "../example/actions";

const Test = ({ index }) => {
  const state = useSelector((state) => state.layout.config[index]);
  const dispatch = useDispatch();

  console.log("rendering ", index);

  return (
    <div>
      render me {index} {state.props.value}
      <button
        onClick={() =>
          dispatch(changeProperties(index, { value: "CHANGTED VALUE" }))
        }
      >
        Click me
      </button>
    </div>
  );
};

export default Test;
