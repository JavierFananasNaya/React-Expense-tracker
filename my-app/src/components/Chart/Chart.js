import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPoints = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
