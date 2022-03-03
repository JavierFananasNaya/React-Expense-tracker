import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangedHandler = (selectedYearOnFilter) => {
    setSelectedYear(selectedYearOnFilter);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={filterChangedHandler}
          selected={selectedYear}
        ></ExpensesFilter>
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
