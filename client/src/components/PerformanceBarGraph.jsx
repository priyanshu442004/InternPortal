import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceBarChart = () => {
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
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  // Render the chart once the data is loaded
  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Intern Performance per Month",
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

export default PerformanceBarChart;
