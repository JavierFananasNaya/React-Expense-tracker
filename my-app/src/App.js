import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e2', title: "SuperMarket", amount: 23, date: new Date(2022, 1, 26) },
    { id: 'e3', title: "Car Fixing", amount: 222, date: new Date(2022, 2, 23) },
    { id: 'e1', title: "Car Ensurance", amount: 123, date: new Date(2022, 6, 26) },
    { id: 'e4', title: "Coffee", amount: 1, date: new Date(2022, 8, 12) },
  ];

  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
