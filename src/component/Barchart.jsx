import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Slots", "Accuracy", { role: "style" }],
  ["1", 80, "#545AA7"],
  ["2", 45, "#545AA7"],
  ["3", 30, "#545AA7"],
  ["4", 60, "#545AA7"],
  ["5", 58, "#545AA7"],
  ["6", 48, "#545AA7"],
  ["7", 70, "#545AA7"],
];

export const options = {
  hAxis: {
    title: "Slots", // X-axis label
  },
  vAxis: {
    title: "Accuracy (%)", // Y-axis label
    format: "#'%'",
    viewWindow: {
      min: 0,
      max: 100, // Ensure the Y-axis represents percentage values properly
    },
  },
  legend: { position: "none" }, // Hide the legend if not needed
};

export function Barchart() {
  return (
    <Chart
      chartType="ColumnChart"
      className="h-72"
      // width="100%"
      // height="400px"
      data={data}
      options={options}
    />
  );
}
