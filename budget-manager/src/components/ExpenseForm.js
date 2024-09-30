// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ dispatch }) => {
  const [expense, setExpense] = useState({ amount: '', date: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
    setExpense({ amount: '', date: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        placeholder="Amount"
      />
      <input
        type="date"
        value={expense.date}
        onChange={(e) => setExpense({ ...expense, date: e.target.value })}
      />
      <input
        type="text"
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        placeholder="Category"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;