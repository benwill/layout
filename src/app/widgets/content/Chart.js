import React, { useState, useCallback } from "react";
import Highcharts from "highcharts";
import highchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import Measure from "react-measure";

import * as chartTypes from "./ChartConfigs";
import styles from "./chart.module.css";

// init the module
highchartsSankey(Highcharts);

function Chart({ type = "Sankey" }) {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  console.log(dimensions);
  const options = {
    ...chartTypes[type],
    chart: {
      height: dimensions.height,
      width: dimensions.width,
    },
  };

  const onResize = useCallback(
    (contentRect) => {
      setDimensions(contentRect.bounds);
    },
    [setDimensions]
  );

  return (
    <div className={styles.chart}>
      <Measure bounds onResize={onResize}>
        {({ measureRef }) => (
          <div ref={measureRef} className={styles.chart__box}>
            {dimensions.height && dimensions.width ? (
              <HighchartsReact highcharts={Highcharts} options={options} />
            ) : null}
          </div>
        )}
        {/* {dimensions.w && dimensions.h ? <span>done</span> : "loading"} */}
      </Measure>

      {/*  */}
    </div>
  );
}

export default Chart;
