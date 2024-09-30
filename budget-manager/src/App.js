// src/App.js
import React, { useReducer } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import BudgetAlert from './components/BudgetAlert';
import ExpenseTable from './components/ExpenseTable'; // Import ExpenseTable

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'SET_BUDGET':
      return { ...state, budget: { ...state.budget, ...action.payload } };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { expenses: [], budget: {} });

  return (
    <div>
      <h1>Personal Budget Manager</h1>

      {/* Other components */}
      <ExpenseForm dispatch={dispatch} />
      <ExpenseList expenses={state.expenses} />
      <ExpenseSummary expenses={state.expenses} />
      <BudgetAlert expenses={state.expenses} budget={state.budget} />
    </div>
  );
};

export default App;