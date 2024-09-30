import React from 'react';
import BudgetChart from './BudgetChart';

const BudgetAlerts = ({ budget, expenses }) => {
  const budgetData = {
    labels: ['Food', 'Transport', 'Entertainment'], // Example labels, replace as needed
    data: [budget.food, budget.transport, budget.entertainment], // Make sure this aligns with your state structure
  };

  return (
    <div>
      <h2>Budget Alerts</h2>
      <BudgetChart budgetData={budgetData} />
    </div>
  );
};

export default BudgetAlerts;