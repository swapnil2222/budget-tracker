import React, { useContext, useState } from 'react';
import { TiEdit } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEdit, setisEdit] = useState(false);
  const [updatedBalance, setupdatedBalance] = useState(budget);
  const handleChange = (e) => {
    e.preventDefault();
    setupdatedBalance(e.target.value);
    dispatch({
      type: 'UPDATE_BALANCE',
      payload: parseInt(e.target.value),
    });
  };
  const editBalance = () => {
    setisEdit(!isEdit);
  };
  return (
    <div className="d-flex justify-content-between alert alert-secondary">
      <div className="d-flex">
        Budget: £{!isEdit && <span>{budget}</span>}
        <div>
          {isEdit && (
            <input
              className="form-control"
              type="text"
              value={updatedBalance}
              onChange={handleChange}
              onBlur={editBalance}
            ></input>
          )}
        </div>
      </div>
      <div className="d-flex">
        <TiEdit
          size="1.5em"
          onClick={editBalance}
        ></TiEdit>
      </div>
    </div>
  );
};
export default Budget;
