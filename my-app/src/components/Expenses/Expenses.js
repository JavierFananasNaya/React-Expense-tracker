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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={filterChangedHandler}
          selected={selectedYear}
        ></ExpensesFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
