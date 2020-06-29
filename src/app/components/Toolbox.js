import React from "react";

import { Draggable } from "../../engine";
import styles from "./toolbox.module.css";

import widgets from "../widgets";

const getFilterableTypes = (widgets) => {
  const keys = Object.keys(widgets);

  let results = [];

  keys.forEach((x) => {
    if (widgets[x].canDrag) {
      const settings = widgets[x];

      const { defaultProps, supportedAreas = [], icon } = settings;

      var areas = supportedAreas.reduce((map, area) => {
        map[area] = [];
        return map;
      }, {});

      results.push({
        type: x,
        defaultProps: defaultProps ? defaultProps : {},
        areas,
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
            <Draggable
              key={x.type}
              type={x.type}
              areas={x.areas}
              props={x.defaultProps}
            >
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
