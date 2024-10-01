import React from 'react';
import BudgetChart from './BudgetChart';

const BudgetAlerts = ({ budget, expenses }) => {
  const calculateSpent = (category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const categories = Object.keys(budget);

  const ALERT_THRESHOLD = 0.8;

  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Budget Alerts</h2>
      {categories.map((category) => {
        const spent = calculateSpent(category);
        const limit = budget[category];
        const isNearLimit = spent >= ALERT_THRESHOLD * limit;
        const isOverLimit = spent > limit;

        return (
          <div 
            key={category} 
            style={{
              borderBottom: '1px solid #ccc', 
              paddingBottom: '15px', 
              marginBottom: '20px'
            }}
          >
            <h3 style={{ color: '#555' }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <p style={{ color: '#666' }}>Spent: {spent} / Budget: {limit}</p>

            {isOverLimit && (
              <p style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>
                You have exceeded your {category} budget!
              </p>
            )}
            {isNearLimit && !isOverLimit && (
              <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '16px' }}>
                Warning: You are nearing your {category} budget limit.
              </p>
            )}
          </div>
        );
      })}

      {/* Budget Chart with adjusted size */}
      <div style={{ marginTop: '30px', width: '400px', height: '400px', margin: '0 auto' }}> {/* Set the chart size here */}
        <BudgetChart
          budgetData={{
            labels: categories,
            data: categories.map((category) => budget[category]),
          }}
        />
      </div>
    </div>
  );
};

export default BudgetAlerts;