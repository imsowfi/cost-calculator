import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";

const expenses =  [
  {
    id: "e1",
    title: "car insurance",
    amount: 296.64,
    date: new Date(2021, 2, 27),
  },
  { id: "e2", title: "coffee", amount: 2.99, date: new Date(2022, 9, 10) },
  { id: "e3", title: "new mug", amount: 10, date: new Date(2020, 2, 5) },
  { id: "e4", title: "new sneakers", amount: 400, date: new Date(2018, 7, 11) },
  { id: "e5", title: "lunch", amount: 3, date: new Date(2019, 11, 29) },
];

function App() {
  const saveNewExpenseHandler = (expense) => {
    expenses.push(expense);
    console.log(expenses);
  };
  return (
    <div className="App">
      <NewExpenses onSaveNewExpense={saveNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
