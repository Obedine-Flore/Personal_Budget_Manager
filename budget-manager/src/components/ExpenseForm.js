import React, { useState } from 'react';

const ExpenseForm = ({ dispatch }) => {
  const [expense, setExpense] = useState({ amount: '', date: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newExpense = {
      id: Date.now(), // Using timestamp as a unique ID
      amount: parseFloat(expense.amount), // Ensure amount is a number
      date: expense.date,
      category: expense.category,
    };

    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    
    setExpense({ amount: '', date: '', category: '' });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px', 
        width: '300px', 
        margin: '20px auto', 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        backgroundColor: '#f9f9f9' 
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>New Expense</h2>

      <input
        type="number"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        placeholder="Amount"
        required
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <input
        type="date"
        value={expense.date}
        onChange={(e) => setExpense({ ...expense, date: e.target.value })}
        required
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <input
        type="text"
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        placeholder="Category in lowercase"
        required
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <button 
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;