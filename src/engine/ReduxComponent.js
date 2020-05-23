import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import React, { useCallback } from "react";

import widgets from "./widgets";
import dotProp from "dot-prop-immutable";
import { changeProperties } from "../example/actions";

const getComponentPath = (parent, areaName, index) => {
  return `${parent}.areas.${areaName}.${index}`;
};

const renderComponentHelper = (componentPath) => {
  return <ReduxComponent componentPath={componentPath} />;
};

const renderAreaHelper = (area, parentPath, areaName) => {
  return area.map((c, idx) => {
    const componentPath = getComponentPath(parentPath, areaName, idx);

    return (
      <ReduxComponent key={componentPath} componentPath={componentPath} />
      //   <span key={parentPath + areaName + idx}>
      //     {idx} - {)}
      //   </span>
    );
    // return this.renderComponent(
    //   c.type,
    //   c.areas,
    //   c.props,
    //   c.id,
    //
    // );
  });
};

const ReduxComponent = ({ componentPath }) => {
  const state = useSelector((state) => {
    return dotProp.get(state.layout.config, componentPath);
  });

  const dispatch = useDispatch();

  const { areas, props, type, id } = state;

  const renderArea = useCallback(
    (areaName) => {
      const area = areas[areaName];
      return renderAreaHelper(area, componentPath, areaName);
    },
    [areas, componentPath]
  );

  const updateProperties = useCallback(
    (properties) => {
      dispatch(changeProperties(componentPath, properties));
    },
    [componentPath, dispatch]
  );

  // TODO: Component rendering should be split ut of this
  const { component: ReactComponent, canDrag } = widgets[type];

  const css = classNames("component");

  console.log("RENDERING", componentPath);
  return (
    <div className={css}>
      {/* {/* {componentPath} {renderAreas(state.areas)} */}

      <ReactComponent
        {...props}
        renderArea={renderArea}
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
        id={id}
        componentPath={componentPath}
        canDrag
      />
    </div>
  );
};

export default ReduxComponent;
