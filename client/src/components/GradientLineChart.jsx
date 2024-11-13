import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const performancePoints = {
  'Perfect': 10,
  'Good': 7.5,
  'Average': 5,
  'Bad': 2.5,
  'perfect': 10,
  'good': 7.5,
  'average': 5,
  'bad': 2.5
};

const PerformanceChart = ({ timeframe, performanceData }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!performanceData || !performanceData.performance) return;
  
    const performanceArray = performanceData.performance.split(',').map(item => item.trim());
    let relevantPerformance = [];
    let labels = [];
  
    switch(timeframe) {
      case 'Weekly':
        relevantPerformance = performanceArray.slice(-1);
        break;
      case 'Monthly':
        relevantPerformance = performanceArray.slice(-4);
        break;
      case 'Overall':
        relevantPerformance = performanceArray;
        break;
    }
  
    // Create expanded visualization for single data point
    const isSingleDataPoint = relevantPerformance.length === 1;
    if (isSingleDataPoint) {
      labels = ['Start', 'Current', 'End'];
      const performanceValue = performancePoints[relevantPerformance[0]];
      setChartData({
        labels: labels,
        datasets: [{
          label: 'Performance Trend',
          data: Array(3).fill(performanceValue),
          fill: true,
          backgroundColor: 'rgba(255, 165, 0, 0.5)',
          borderColor: 'rgba(255, 165, 0, 1)',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: 'rgba(255, 165, 0, 1)',
        }],
      });
    } else {
      setChartData({
        labels: relevantPerformance.map((_, index) => `Week ${index + 1}`),
        datasets: [{
          label: 'Performance Trend',
          data: relevantPerformance.map(perf => performancePoints[perf]),
          fill: true,
          backgroundColor: 'rgba(255, 165, 0, 0.5)',
          borderColor: 'rgba(255, 165, 0, 1)',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(255, 165, 0, 1)',
        }],
      });
    }
  }, [timeframe, performanceData]);
  
  

  useEffect(() => {
    if (chartRef.current && chartData) {
      const chart = chartRef.current;
      const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, 'rgba(255, 165, 0, 0.6)');
      gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

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
        max: 12,
        ticks: {
          color: '#6b7280',
          callback: (value) => `${value} points`
        },
        grid: {
          color: '#e5e7eb',
        },
      },
      x: {
        ticks: {
          color: '#6b7280',
        },
        grid: {
          color: '#e5e7eb',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: `Performance Analysis (${timeframe==='weekly'?"This Week":timeframe==='monthly'?"This Month":timeframe})`,
        color: '#374151',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
  };

  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-md p-4 shadow-md">
      {chartData ? (
        <Line ref={chartRef} data={chartData} options={options} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p>Loading chart data...</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;
