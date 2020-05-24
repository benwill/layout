import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import React, { useCallback } from "react";

import widgets from "./widgets";
import dotProp from "dot-prop-immutable";
import {
  changeProperties,
  startDragging,
  stopDragging,
} from "../example/actions";

import Draggable from "./Draggable";

const ReduxComponent = React.memo(({ componentPath }) => {
  const props = useSelector((state) => {
    const comp = dotProp.get(state.layout.config, componentPath);
    return comp.props;
  });
  //   const areaNames = useSelector((state) => {
  //     const areas = dotProp.get(state.layout.config, componentPath);

  //     if (!areas) return [];
  //     return Object.keys(areas);
  //   });
  const type = useSelector((state) => {
    return dotProp.get(state.layout.config, componentPath).type;
  });

  const dispatch = useDispatch();

  const updateProperties = useCallback(
    (properties) => {
      dispatch(changeProperties(componentPath, properties));
    },
    [componentPath, dispatch]
  );

  const onStartDrag = useCallback(() => {
    dispatch(startDragging());
  }, [dispatch]);

  const onStopDrag = useCallback(() => {
    dispatch(stopDragging());
  }, [dispatch]);

  //   const onStartDrag = useCallback(
  //     (properties) => {
  //       dispatch(changeProperties(componentPath, properties));
  //     },
  //     [componentPath, dispatch]
  //   );

  // TODO: Component rendering should be split ut of this
  const { component: ReactComponent, canDrag } = widgets[type];

  const css = classNames("component");

  console.log("REDUX COMPONENT", props);
  //   console.log("RENDERING", componentPath, props, type);

  const component = (
    <ReactComponent
      {...props}
      // renderArea={renderArea}
      updateProperties={updateProperties}
      // {...context}
      // renderAreas={(position) => {
      //   return context.renderAreas(areas, position, componentPath);
      // }}
      // renderDropZone={(target, index) => {
      //   const fullDropzonePath = `${componentPath}.areas.${target}`;
      //   console.log(fullDropzonePath);
      //   return context.renderDropZone(id, fullDropzonePath, index);
      // }}
      // updateProperty={(values) => {
      //   updateProperty(componentPath, values);
      // }}
      // id={id}
      componentPath={componentPath}
      canDrag
    />
  );

  return canDrag ? (
    <Draggable
      //   id={id}
      type={type}
      componentPath={componentPath}
      onStartDrag={onStartDrag}
      onStopDrag={onStopDrag}
    >
      {component}
    </Draggable>
  ) : (
    component
  );
});

export default ReduxComponent;
