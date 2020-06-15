import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setConfig } from "../engine/redux/actions";

// Examples
import Example from "./components/Example";

import ExampleData from "./data";

function Body() {
  const dispatch = useDispatch();
  const example = useSelector((state) => {
    return state.app.currentExample;
  });
  const canEdit = useSelector((state) => {
    return state.layout.canEdit;
  });

  const data = ExampleData[example];

  useEffect(() => {
    dispatch(setConfig(data));
  }, [dispatch, data]);

  return <Example canEdit={canEdit} />;
}

export default Body;
