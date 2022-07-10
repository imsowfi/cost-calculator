import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterdExpenseData
    };
    props.onSaveNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = { saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
