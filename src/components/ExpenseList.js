import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [searchText, setsearchText] = useState('');
  const onSearch = (e) => {
    setsearchText(e.target.value);
  };
  const filterExpenses = expenses.filter((expense) => {
    if (
      searchText === '' ||
      expense.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  return (
    <div>
      <div className="list-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="search expense"
          id="searchExpense"
          onChange={onSearch}
          value={searchText}
        ></input>
      </div>
      <div>
        <ul className="list-group">
          {filterExpenses.map((expense) => (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
              key={expense.id}
            ></ExpenseItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExpenseList;
