import React from "react";

import { Draggable } from "../../engine";
import styles from "./toolbox.module.css";

import widgets from "../data/widgets";

const getFilterableTypes = (widgets) => {
  const keys = Object.keys(widgets);

  let results = [];

  keys.forEach((x) => {
    if (widgets[x].canDrag) {
      const settings = widgets[x];

      const { defaultProps, icon } = settings;

      results.push({
        type: x,
        defaultProps: defaultProps ? defaultProps : {},
        icon,
      });
    }
  });

  return results;
};

const supportedWidgets = getFilterableTypes(widgets);

const Toolbox = () => {
  return (
    <div className={styles.toolbox}>
      <h2 className="title is-4">Toolbox</h2>

      <ul>
        {supportedWidgets.map((x) => {
          return (
            <Draggable key={x.type} type={x.type} props={x.defaultProps}>
              <li className={styles.toolbox__list__item}>
                <div>
                  <span className="icon icon-medium">
                    <i className={`fas ${x.icon}`}></i>
                  </span>
                  {x.type}
                </div>
              </li>
            </Draggable>
          );
        })}
      </ul>
    </div>
  );
};

export default Toolbox;