import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
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
