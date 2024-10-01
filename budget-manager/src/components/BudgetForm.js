import React, { useState } from 'react';

const BudgetForm = ({ dispatch }) => {
  const [budget, setBudget] = useState({ food: '', transport: '', entertainment: '', rent: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_BUDGET', payload: budget });

    // Reset form fields
    setBudget({ food: '', transport: '', entertainment: '', rent: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <h2 style={styles.heading}>Set Budget Limits</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Food: </label>
        <input
          type="number"
          value={budget.food}
          onChange={(e) => setBudget({ ...budget, food: parseFloat(e.target.value) })}
          placeholder="Enter food budget"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Transport: </label>
        <input
          type="number"
          value={budget.transport}
          onChange={(e) => setBudget({ ...budget, transport: parseFloat(e.target.value) })}
          placeholder="Enter transport budget"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Entertainment: </label>
        <input
          type="number"
          value={budget.entertainment}
          onChange={(e) => setBudget({ ...budget, entertainment: parseFloat(e.target.value) })}
          placeholder="Enter entertainment budget"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Rent: </label>
        <input
          type="number"
          value={budget.rent}
          onChange={(e) => setBudget({ ...budget, rent: parseFloat(e.target.value) })}
          placeholder="Enter rent budget"
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.submitButton}>Set Budget</button>
    </form>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    color: '#555',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default BudgetForm;