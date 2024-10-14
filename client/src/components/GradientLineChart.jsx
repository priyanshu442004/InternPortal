import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const PerformanceChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    const fetchData = async () => {
      const response = await fetch('/data.json'); // Adjust path if needed
      const data = await response.json();
      setChartData({
        labels: data.internsPerformance.map((entry) => entry.month),
        datasets: [
          {
            label: 'Intern Performance',
            data: data.internsPerformance.map((entry) => entry.performance),
            fill: true,
            backgroundColor: 'rgba(255, 165, 0, 0.5)', // Placeholder, gradient will be applied
            borderColor: 'rgba(255, 165, 0, 1)', // Orange line
            borderWidth: 2,
            tension: 0.4, // Smooth line
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255, 165, 0, 1)',
          },
        ],
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData) {
      const chart = chartRef.current;

      // Create gradient for the chart background with fade-out effect
      const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, 'rgba(255, 165, 0, 0.6)'); // Stronger orange at the top
      gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.3)'); // Fading in the middle
      gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');   // Fully transparent at the bottom

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [chartData]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#6b7280', // Tailwind gray-500
        },
        grid: {
          color: '#e5e7eb', // Tailwind gray-200
        },
      },
      x: {
        ticks: {
          color: '#6b7280', // Tailwind gray-500
        },
        grid: {
          color: '#e5e7eb', // Tailwind gray-200
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Shows the legend for the line
      },
    },
  };

  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-md p-4 shadow-md">
      {chartData ? <Line ref={chartRef} data={chartData} options={options} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default PerformanceChart;
