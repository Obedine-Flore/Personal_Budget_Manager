import React, { useReducer, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import BudgetAlert from './components/BudgetAlert';
import ExpenseTable from './components/ExpenseTable'; // Import ExpenseTable

// Define the initial state with expenses and budget
const initialState = {
  expenses: JSON.parse(localStorage.getItem('expenses')) || [], // Load from localStorage
  budget: { 
    food: 13000, // Example limits (in currency units)
    transport: 5000,
    entertainment: 2000,
    rent: 10000,
  }
};

// Reducer function to handle actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newExpenses = [...state.expenses, action.payload];
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      return { ...state, expenses: [...state.expenses, action.payload] };

    case 'SET_BUDGET':
      return { ...state, budget: { ...state.budget, ...action.payload } };

    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload),
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect to save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state.expenses]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Flore's Personal Budget Manager</h1>
      
      <div style={styles.content}>
        {/* Section for Expense Form */}
        <div style={styles.section}>
          <ExpenseForm dispatch={dispatch} />
        </div>

        {/* Section for Expense Table */}
        <div style={styles.section}>
          <ExpenseTable items={state.expenses} dispatch={dispatch} />
        </div>

        {/* Section for Expense Summary */}
        <div style={styles.section}>
          <ExpenseSummary expenses={state.expenses} />
        </div>

        {/* Section for Budget Alerts (with the bar chart) */}
        <div style={styles.section}>
          <BudgetAlert expenses={state.expenses} budget={state.budget} />
        </div>
      </div>
    </div>
  );
};

// Basic styles for the App
const styles = {
  container: {
    backgroundColor: '#f4f4f9', // Light background
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  content: {
    width: '100%',
    maxWidth: '800px', // Limit the content width
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '30px', // Add margin between sections
  },
};

export default App;