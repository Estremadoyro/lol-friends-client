import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chartjs-plugin-labels";

export const WRPie = (props) => {
  const data = {
    datasets: [
      {
        data: [props.wins, props.losses],
        backgroundColor: ["rgba(54,162,235,0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54,162,235,1)", "rgba(255, 99, 132, 1)"],
      },
    ],

    labels: ["Wins", "Losses"],
  };
  const options = {
    maintainAspectRatio: false,
    reverse: true,
    responsive: true,
    legend: {
      display: false,
    },
    plugins: {
      labels: {
        render: "value",
        fontSize: 14,
        fontStyle: "bold",
        fontColor: "#000",
        fontFamily: '"Lucida Console", Monaco, monospace',
      },
    },
  };
  return (
    <div className="wrapper">
      <Pie data={data} height={100} width={100} options={options} />
    </div>
  );
};
