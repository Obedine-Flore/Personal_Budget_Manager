import React, { useState } from 'react';

const ExpenseTable = ({ items }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedItems = [...items].sort((a, b) => {
    if (sortConfig.key === null) return 0; // No sorting if no key is specified

    const directionFactor = sortConfig.direction === 'asc' ? 1 : -1;

    if (a[sortConfig.key] < b[sortConfig.key]) return -1 * directionFactor;
    if (a[sortConfig.key] > b[sortConfig.key]) return 1 * directionFactor;
    return 0;
  });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('category')}>Category</th>
          <th onClick={() => handleSort('date')}>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item) => (
          <tr key={item.id}>
            <td>{item.category}</td>
            <td>{new Date(item.date).toLocaleDateString()}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;