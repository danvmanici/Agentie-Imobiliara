import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ChartProgramari = ({ chartValues }) => {
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  return (
    <div className="my-chart">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Programari",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: chartValues,
            },
          ],
        }}
        height={400}
        width={800}
      />
    </div>
  );
};

ChartProgramari.prototype = {
  chartValues: PropTypes.object,
};

export default ChartProgramari;
