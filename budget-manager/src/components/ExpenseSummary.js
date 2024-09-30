// src/components/ExpenseSummary.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseSummary = ({ expenses }) => {
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: categories.map(category =>
          expenses
            .filter(expense => expense.category === category)
            .reduce((acc, curr) => acc + Number(curr.amount), 0)
        ),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default ExpenseSummary;