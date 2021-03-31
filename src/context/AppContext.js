import { createContext, useReducer } from 'react';
import { getData, setData } from '../utils/localStore';
const reducer = (state, action) => {
  let obj = {};
  switch (action.type) {
    case 'ADD_EXPENSE':
      obj = {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
      setData(obj);
      return obj;
    case 'REMOVE_EXPENSE':
      obj = {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
      setData(obj);
      return obj;
    case 'UPDATE_BALANCE':
      obj = {
        ...state,
        budget: action.payload,
      };
      setData(obj);
      return obj;
    default:
      return state;
  }
};
const localStoreData = getData();
let parsedData = {};
if (localStoreData) {
  parsedData = JSON.parse(localStoreData);
}
const initialState = parsedData;

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
