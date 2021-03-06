import React from "react";
import "chartjs-plugin-datalabels";

import { HorizontalBar } from "react-chartjs-2";

import "../styles/WRPie.css";

export const TestChart = () => {
  const data = {
    labels: ["Record"],
    datasets: [
      {
        label: "Wins",
        data: [10],
        backgroundColor: ["rgba(54,162,235,0.2)"],
        borderColor: ["rgba(54,162,235,1)"],
        borderWidth: 1,
      },
      {
        label: "Losses",
        data: [15],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        color: "#000",
        labels: {
          font: {
            weight: "bold",
            size: "28",
          },
        },
        // render: "percentage",
        // fontSize: 20,
        // fontStyle: "bold",
        // fontColor: "#000",
        // fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      },
    },

    maintainAspectRatio: false,
    reverse: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
            max: 25,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
  };
  return (
    <div className="wrapper">
      <HorizontalBar data={data} options={options} />
    </div>
  );
};
