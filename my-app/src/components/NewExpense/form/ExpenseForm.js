import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //Below method is used to only use one state instead of three

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    //Use below method when state update depends on previous value

    // setUserInput( (prevState) =>{
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    
    // after saving their state we stablish them to empty again here

    setenteredTitle('');
    setenteredDate('');
    setenteredAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
