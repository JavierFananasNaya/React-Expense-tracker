import React, { useState } from "react";
import ExpenseForm from "./form/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{

    const [openForm, setOpenForm] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setOpenForm(true);
    }

    const closeFormHandler = () => {
        setOpenForm(false);
    }


    return <div className="new-expense">
        {!openForm && <button onClick={startEditingHandler}>Add New Expense</button>}
        {openForm && <ExpenseForm onCloseForm={closeFormHandler} onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>}
        
    </div>
};

export default NewExpense;