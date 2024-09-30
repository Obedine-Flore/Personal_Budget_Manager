// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.category}: ${expense.amount} on {expense.date}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;