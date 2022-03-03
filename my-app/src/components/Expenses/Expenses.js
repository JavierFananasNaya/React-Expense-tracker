import ExpensesList from "./ExpensesList/ExpensesList";
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



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={filterChangedHandler}
          selected={selectedYear}
        ></ExpensesFilter>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
