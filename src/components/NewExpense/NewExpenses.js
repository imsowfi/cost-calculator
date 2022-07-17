import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    return setIsEditing(true);
  };
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    props.onSaveNewExpense(expenseData);
    setIsEditing(false);
  };
  const onCancelHandler = () => {
    return setIsEditing (false) ;
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>add new expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {onCancelHandler} />}
    </div>
  );
};

export default NewExpenses;
