import React, { useState, useMemo } from 'react';

const ExpenseTable = ({ items, dispatch }) => { // Added dispatch as a prop
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Parse dates if sorting by date
        if (sortConfig.key === 'date') {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Function to handle delete
  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th 
            onClick={() => handleSort('category')} 
            style={{ cursor: 'pointer', backgroundColor: '#f2f2f2', padding: '10px', border: '1px solid #ccc' }}
          >
            Category
          </th>
          <th 
            onClick={() => handleSort('date')} 
            style={{ cursor: 'pointer', backgroundColor: '#f2f2f2', padding: '10px', border: '1px solid #ccc' }}
          >
            Date
          </th>
          <th 
            onClick={() => handleSort('amount')} 
            style={{ cursor: 'pointer', backgroundColor: '#f2f2f2', padding: '10px', border: '1px solid #ccc' }}
          >
            Amount
          </th>
          <th style={{ backgroundColor: '#f2f2f2', padding: '10px', border: '1px solid #ccc' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item) => (
          <tr key={item.id} style={{ border: '1px solid #ccc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.category}</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{new Date(item.date).toLocaleDateString()}</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.amount}</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
              <button 
                onClick={() => handleDelete(item.id)} 
                style={{ cursor: 'pointer', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;