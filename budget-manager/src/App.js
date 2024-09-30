// src/App.js
import React, { useReducer } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import BudgetAlert from './components/BudgetAlert';
import ExpenseTable from './components/ExpenseTable'; // Import ExpenseTable

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'SET_BUDGET':
      return { ...state, budget: { ...state.budget, ...action.payload } };
    case 'DELETE_EXPENSE': // Add this case for deletion
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload), // Filter out the deleted expense
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { expenses: [], budget: {} });

  return (
    <div>
      <h1>Personal Budget Manager</h1>
      <ExpenseForm dispatch={dispatch} />
      <ExpenseTable items={state.expenses} dispatch={dispatch} />
      <ExpenseSummary expenses={state.expenses} />
      <BudgetAlert expenses={state.expenses} budget={state.budget} />
    </div>
  );
};

export default App;