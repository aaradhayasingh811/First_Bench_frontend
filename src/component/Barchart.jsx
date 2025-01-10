import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend);

export function Barchart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Accuracy",
        data: [80, 45, 30, 60, 58, 48, 70],
        backgroundColor: "rgba(132, 134, 214, 0.9)", 
        borderColor: "#8486D6", 
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 15, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, 
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
          display: false, 
        },
      },
      y: {
        title: {
          display: true,
          text: "Accuracy (%)",
        },
        ticks: {
          callback: (value) => `${value}%`, 
          stepSize: 25,
        },
        grid: {
          drawBorder: true, 
          color: "#e0e0e0", 
        },
        min: 0,
        max: 100, 
      },
    },
  };

  return (
    <>
    <div style={{ height: "300px", width: "80%" }} className="sm:flex hidden" ref={chartRef}>
      <Bar data={data} options={options} className="sm:ms-10 ms-5" />
    </div>
     <div style={{ height: "300px", width: "100%" }} className="sm:hidden flex" ref={chartRef}>
     <Bar data={data} options={options} className="sm:ms-10 ms-0" />
   </div>
   </>
  );
}
