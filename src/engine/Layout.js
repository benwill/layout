import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import className from "classnames";
import { useSelector } from "react-redux";
import Component from "./Component";

import { setConfig } from "./redux/actions";

const Layout = ({ initialConfig, widgets, canEdit }) => {
  const isDragging = useSelector((state) => state.layout.isDragging);
  const initialised = useSelector((state) => state.layout.initialised);

  const dispatch = useDispatch();

  console.log(initialConfig);

  useEffect(() => {
    console.log("setting config", initialConfig);
    dispatch(setConfig(initialConfig, canEdit));
  }, [dispatch, initialConfig, canEdit]);

  const css = className("layout", {
    "layout--is-dragging": isDragging,
  });

  if (!initialised) return null;

  return (
    <div className={css}>
      <Component componentPath="root" widgets={widgets}></Component>
    </div>
  );
};

export default Layout;
