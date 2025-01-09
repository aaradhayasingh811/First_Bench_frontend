import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend);

export function Barchart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Accuracy",
        data: [80, 45, 30, 60, 58, 48, 70],
        backgroundColor: "rgba(132, 134, 214, 0.9)", // Custom color with opacity
        borderColor: "#8486D6", // Border color
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 20, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend
      title: {
        display: false,
        text: "Accuracy per Slot",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Slots",
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        title: {
          display: true,
          text: "Accuracy (%)",
        },
        ticks: {
          callback: (value) => `${value}%`, // Add '%' to y-axis labels
          stepSize: 25, // Step size between values
        },
        grid: {
          drawBorder: true, // Display border line
          color: "#e0e0e0", // Horizontal grid line color
        },
        min: 0,
        max: 100, // Explicitly set max and min values
      },
    },
  };

  return (
    <div style={{ height: "300px", width: "100%" }} ref={chartRef}>
      <Bar data={data} options={options} />
    </div>
  );
}
