import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const drawRoundedCandle = (ctx, x, open, high, low, close, width) => {
  const halfWidth = width / 2;
  const bodyColor = close > open ? "#26A69A" : "#EF5350";
  const wickColor = "#B2B5BE";

  // Draw the wick
  ctx.strokeStyle = wickColor;
  ctx.beginPath();
  ctx.moveTo(x, low);
  ctx.lineTo(x, high);
  ctx.stroke();

  // Draw the body
  ctx.fillStyle = bodyColor;
  const top = Math.min(open, close);
  const bottom = Math.max(open, close);
  const height = bottom - top;

  ctx.beginPath();
  ctx.moveTo(x - halfWidth, top + halfWidth);
  ctx.lineTo(x - halfWidth, bottom - halfWidth);
  ctx.arc(x - halfWidth, bottom - halfWidth, halfWidth, 0, Math.PI / 2);
  ctx.lineTo(x + halfWidth, bottom);
  ctx.arc(x + halfWidth, bottom - halfWidth, halfWidth, Math.PI / 2, Math.PI);
  ctx.lineTo(x + halfWidth, top + halfWidth);
  ctx.arc(x + halfWidth, top + halfWidth, halfWidth, Math.PI, 3 * Math.PI / 2);
  ctx.lineTo(x - halfWidth, top);
  ctx.arc(x - halfWidth, top + halfWidth, halfWidth, 3 * Math.PI / 2, 0);
  ctx.fill();

  // Draw circles at top and bottom
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.arc(x, high, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, low, 2, 0, 2 * Math.PI);
  ctx.fill();
};

const candlestickPlugin = {
  id: 'candlestick',
  beforeDatasetsDraw: (chart, args, options) => {
    const { ctx, data, scales: { x, y } } = chart;
    const dataset = data.datasets[0];
    const candleWidth = x.getPixelForValue(1) - x.getPixelForValue(0);

    dataset.data.forEach((datapoint, index) => {
      const xPos = x.getPixelForValue(datapoint.x);
      drawRoundedCandle(
        ctx,
        xPos,
        y.getPixelForValue(datapoint.o),
        y.getPixelForValue(datapoint.h),
        y.getPixelForValue(datapoint.l),
        y.getPixelForValue(datapoint.c),
        candleWidth * 0.8
      );
    });
  }
};

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
              label: "Candlesticks",
              data: performanceData,
              type: 'candlestick',
            },
            {
              label: "Closing Line",
              data: performanceData.map(item => ({ x: item.x, y: item.c })),
              type: 'line',
              borderColor: "#5470C6",
              borderWidth: 2,
              pointRadius: 0,
              fill: false,
            }
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: { month: 'MMM' },
        },
        grid: { display: false },
        ticks: { font: { size: 10, weight: 'bold' } },
      },
      y: {
        position: 'right',
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          font: { size: 10, weight: 'bold' },
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px] bg-gradient-to-t from-[#131722] to-[#1E222D]">
      {chartData ? (
        <Chart
          type="candlestick"
          data={chartData}
          options={options}
          plugins={[candlestickPlugin]}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default CandleStickChart;
