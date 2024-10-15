import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Import Filler for stacked area chart
} from "chart.js";

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const StackedAreaChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Replace this with actual data or fetch from backend
    const sampleData = {
      labels: ["1", "60", "120", "180", "240"], // X-axis labels
      datasets: [
        {
          label: "Dataset 1",
          data: [50, 100, 75, 150, 200],
          borderColor: "rgba(255, 159, 64, 1)",
          backgroundColor: "rgba(255, 159, 64, 0.4)", // Fill area
          fill: true,
        },
        {
          label: "Dataset 2",
          data: [30, 80, 120, 140, 180],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.4)", // Fill area
          fill: true,
        },
        {
          label: "Dataset 3",
          data: [90, 110, 150, 180, 220],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.4)", // Fill area
          fill: true,
        },
      ],
    };

    setChartData(sampleData);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto mt-5">
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
            scales: {
              x: {
                stacked: true, // Enable stacking for the x-axis
              },
              y: {
                stacked: true, // Enable stacking for the y-axis
                beginAtZero: true, // Ensure y-axis starts from 0
              },
            },
          }}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default StackedAreaChart;
