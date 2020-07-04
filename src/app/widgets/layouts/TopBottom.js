import React, { useState, useCallback } from "react";
import Measure from "react-measure";

import styles from "./topbottom.module.css";
import { useSelector } from "react-redux";
import { areaContainsItems } from "../../../engine/redux/helpers";

function TopBottom({ componentPath, renderArea, renderDropZone }) {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  const onResize = useCallback(
    (contentRect) => {
      setDimensions(contentRect.bounds);
    },
    [setDimensions]
  );

  const showTopDropZone = useSelector((state) => {
    return areaContainsItems(state, componentPath, "top");
  });

  const showBottomDropZone = useSelector((state) => {
    return areaContainsItems(state, componentPath, "bottom");
  });

  return (
    <Measure bounds onResize={onResize}>
      {({ measureRef }) => (
        <div className={styles.topbottom} ref={measureRef}>
          {dimensions.height && dimensions.width ? (
            <>
              <div
                className={styles.topbottom__top}
                style={{
                  height: dimensions.height / 2 + "px",
                }}
              >
                {renderArea("top")}
                {showTopDropZone && renderDropZone("top")}
              </div>

              <div
                className={styles.topbottom__bottom}
                style={{
                  height: dimensions.height / 2 + "px",
                }}
              >
                {renderArea("bottom")}
                {showBottomDropZone && renderDropZone("bottom")}
              </div>
            </>
          ) : null}
        </div>
      )}
    </Measure>
  );
}

export default TopBottom;
