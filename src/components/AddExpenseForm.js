import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    setName('');
    setCost('');
  };
  return (
      <form className="mx-3" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required="required"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              required="required"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            ></input>
          </div>
          <div className="col-sm mt-3">
            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </div>
        </div>
      </form>
  );
};
export default AddExpenseForm;
