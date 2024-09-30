import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { BarElement } from 'chart.js';
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const BudgetChart = ({ budgetData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const chart = chartRef.current;
      if (chart) {
        // Do something with the chart
        console.log('Chart initialized successfully');
      }
    }, 100); // Delay by 100ms to ensure DOM is available

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [budgetData]); // Run this effect whenever budgetData changes

  if (!budgetData) {
    return null; // Avoid rendering if budgetData is undefined
  }

  const data = {
    labels: budgetData.labels || [],
    datasets: [
      {
        data: budgetData.data || [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <ErrorBoundary> {/* Wrap the chart component in ErrorBoundary */}
      <div>
        <Pie ref={chartRef} data={data} />
      </div>
    </ErrorBoundary>
  );
};

export default BudgetChart;