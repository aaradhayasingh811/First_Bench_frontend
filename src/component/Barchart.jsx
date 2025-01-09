import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Slots", "Accuracy", { role: "style" }],
  ["1", 80, "color: #545AA7; stroke-width: 1; opacity: 0.9"], // Custom style
  ["2", 45, "color: #545AA7; stroke-width: 1; opacity: 0.8"],
  ["3", 30, "color: #545AA7; stroke-width: 1; opacity: 0.7"],
  ["4", 60, "color: #545AA7; stroke-width: 1; opacity: 0.9"],
  ["5", 58, "color: #545AA7; stroke-width: 1; opacity: 0.8"],
  ["6", 48, "color: #545AA7; stroke-width: 1; opacity: 0.7"],
  ["7", 70, "color: #545AA7; stroke-width: 1; opacity: 0.9"],
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
