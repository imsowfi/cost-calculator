import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button className="card" onClick={clickHandler}>
        click here
      </button>
    </div>
  );
}

export default ExpenseItems;
