import React, { useEffect, useRef } from "react";
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
    title: "Slots",
  },
  vAxis: {
    title: "Accuracy (%)",
    format: "#'%'",
    viewWindow: {
      min: 0,
      max: 100,
    },
  },
  legend: { position: "none" },
};

export function Barchart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Target the SVG bars after the chart is rendered
      const svg = chartRef.current?.querySelector("svg");
      if (svg) {
        const bars = svg.querySelectorAll("rect[fill]");
        bars.forEach((bar) => {
          const height = bar.getAttribute("height");
          const width = bar.getAttribute("width");

          // Only round top corners by clipping the bottom
          bar.setAttribute("rx", "10"); // Top-left corner
          bar.setAttribute("ry", "10"); // Top-right corner

          // Clip the bottom to make the bottom square (no rounding)
          bar.style.clipPath = `polygon(0 0, 100% 0, 100% ${height}, 0 ${height})`;
        });
      }
    }, 500); // Ensure the chart is fully rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={chartRef}>
      <Chart
        chartType="ColumnChart"
        className="h-72"
        data={data}
        options={options}
      />
    </div>
  );
}
