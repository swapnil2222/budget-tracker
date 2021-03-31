import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/AddExpenseForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import TotalExpense from './components/TotalExpense';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget></Budget>
          </div>
          <div className="col-sm">
            <Remaining></Remaining>
          </div>
          <div className="col-sm">
            <TotalExpense></TotalExpense>
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="mt-3 row">
          <div className="col-sm">
            <ExpenseList></ExpenseList>
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <AddExpenseForm></AddExpenseForm>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;