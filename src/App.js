import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";

const BASEDEXPENESE = [
  { id: "e1", title: "car ins", amount: 296.64, date: new Date(2021, 2, 27) },
  { id: "e2", title: "coffee", amount: 2.99, date: new Date(2022, 9, 10) },
  { id: "e3", title: "new mug", amount: 10, date: new Date(2020, 2, 5) },
  { id: "e4", title: "new sneakers", amount: 400, date: new Date(2018, 7, 11) },
  { id: "e5", title: "lunch", amount: 3, date: new Date(2020, 11, 29) },
];
// let expenseCount = BASEDEXPENESE.length ;

function App() {
  const [expenses, setExpenses] = useState(BASEDEXPENESE);

  const saveNewExpenseHandler = (expense) => {
    setExpenses((pervExpenses) => {
      return [expense, ...pervExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpenses onSaveNewExpense={saveNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
