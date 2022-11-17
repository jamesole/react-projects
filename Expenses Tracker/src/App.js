import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense";

import React, {useState} from 'react';


const expenseList = [
  {title: 'Car Insurance', amount: 280, date: new Date(2021, 3, 28)},
  {title: 'Dog Food', amount: 39, date: new Date(2021, 5, 12)},
  {title: 'Netflix', amount: 20, date: new Date(2021, 1, 30)},
];

function App() {

  const [expenses, setExpenses] = useState(expenseList);

  const addExpenseHandler = (expense) => {
    //spread operator to get the prior expenses and add the new expense to the state of the array
    //need to use this special way of pointing to a function (see vid 65);
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler}/>

      {expenses.map(expense => {
        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={Math.random()}/>
      })};
      
    </Card>
  );
}

export default App;
