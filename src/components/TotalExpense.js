import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TotalExpense = () => {
  const { expenses } = useContext(AppContext);
  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">Spent so far : £{totalExpense}</div>
  );
};
export default TotalExpense;
