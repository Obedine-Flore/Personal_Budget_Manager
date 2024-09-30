// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ dispatch }) => {
  const [expense, setExpense] = useState({ amount: '', date: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add a unique id to each expense
    const newExpense = {
      id: Date.now(), // Using timestamp as a unique ID
      amount: parseFloat(expense.amount), // Ensure amount is a number
      date: expense.date,
      category: expense.category,
    };

    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    
    // Reset the form fields after submission
    setExpense({ amount: '', date: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        placeholder="Amount"
        required // Optional: enforce required input
      />
      <input
        type="date"
        value={expense.date}
        onChange={(e) => setExpense({ ...expense, date: e.target.value })}
        required // Optional: enforce required input
      />
      <input
        type="text"
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        placeholder="Category"
        required // Optional: enforce required input
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;