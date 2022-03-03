import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import HookExample from "./components/HookExample/HookExample";

const DUMMY_EXPENSES = [
  { id: "e2", title: "SuperMarket", amount: 23, date: new Date(2022, 1, 26) },
  { id: "e3", title: "Car Fixing", amount: 222, date: new Date(2020, 2, 23) },
  {
    id: "e1",
    title: "Car Ensurance",
    amount: 123,
    date: new Date(2021, 6, 26),
  },
  { id: "e4", title: "Coffee", amount: 21, date: new Date(2020, 8, 12) },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>

      <HookExample></HookExample>
    </div>
  );
}

export default App;
