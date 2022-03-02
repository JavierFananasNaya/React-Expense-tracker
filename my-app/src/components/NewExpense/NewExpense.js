import React from "react";
import ExpenseForm from "./form/ExpenseForm";
import './NewExpense.css';

const NewExpense = () =>{

    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
    </div>
};

export default NewExpense;