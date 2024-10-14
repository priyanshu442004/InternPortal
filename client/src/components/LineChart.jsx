// src/components/PerformanceChart.jsx
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";  // Change from Bar to Line
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, // Import LineElement for the line chart
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Line chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the performance data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const labels = data.internsPerformance.map((item) => item.month);
        const performanceData = data.internsPerformance.map(
          (item) => item.performance
        );

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Intern Performance",
              data: performanceData,
              borderColor: "rgb(255, 165, 0)",  // Line color
              backgroundColor: "rgba(75, 192, 192, 0.2)",  // Light fill under the line
              borderWidth: 3,
              tension: 0.4,  // Smooth the line between points
              pointBackgroundColor: "rgba(75, 192, 192, 1)",  // Color of the points
            },
          ],
        });
      });
  }, []);

  // Render the chart once the data is loaded
  return (
    <div className="w-full max-w-lg mx-auto mt-5">
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
                position: "top",
              },
              title: {
                display: false,
                text: "Intern Performance per Month",
              },
            },
            scales: {
              y: {
                beginAtZero: true,  // Ensure the y-axis starts at 0
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

export default LineChart;
