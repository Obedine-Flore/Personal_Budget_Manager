import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { BarElement } from 'chart.js';
import ErrorBoundary from './ErrorBoundary'; // Imports ErrorBoundary

// This line registers the required components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const BudgetChart = ({ budgetData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const chart = chartRef.current;
      if (chart) {
        // Chart initialized. Do something with the chart
        console.log('Chart initialized successfully');
      }
    }, 100); // Delay by 100ms to ensure DOM is available

    return () => clearTimeout(timeoutId); // Cleans up timeout on unmount
  }, [budgetData]); // Runs this effect whenever budgetData changes

  if (!budgetData) {
    return null; // To avoid rendering if budgetData is undefined
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
    <ErrorBoundary> {/* Let's wrap the chart component in ErrorBoundary */}
      <div>
        <Pie ref={chartRef} data={data} />
      </div>
    </ErrorBoundary>
  );
};

export default BudgetChart;