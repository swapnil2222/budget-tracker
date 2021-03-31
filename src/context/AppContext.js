import { createContext, useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
    case 'UPDATE_BALANCE':
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'shopping', cost: 40 },
    { id: 2, name: 'holiday', cost: 40 },
    { id: 3, name: 'car service', cost: 40 },
  ],
};
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
