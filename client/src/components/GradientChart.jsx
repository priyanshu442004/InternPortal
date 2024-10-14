import React, { useEffect, useState, useRef } from "react"; // Make sure to import useRef
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { CandlestickController, CandlestickElement } from "chartjs-chart-financial";
import { Chart } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CandlestickController,
  CandlestickElement
);

const CandleStickChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/candlestick.json")
      .then((response) => response.json())
      .then((data) => {
        const performanceData = data.internsPerformance.map(item => ({
          x: new Date(item.date),
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close
        }));

        setChartData({
          datasets: [
            {
              label: "Intern Performance",
              data: performanceData,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto mt-5">
      {chartData ? (
        <Chart
          type="candlestick"
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              title: {
                display: true,
                text: "Intern Performance Candlestick Chart",
              },
            },
            scales: {
              x: {
                type: 'time',
                title: {
                  display: true,
                  text: 'Date',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Performance',
                },
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

export default CandleStickChart;
