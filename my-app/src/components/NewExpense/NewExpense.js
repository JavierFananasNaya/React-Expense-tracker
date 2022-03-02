import React from "react";
import ExpenseForm from "./form/ExpenseForm";
import './NewExpense.css';

const NewExpense = () =>{
    return <div className="new-expense">
        <ExpenseForm></ExpenseForm>
    </div>
};

export default NewExpense;