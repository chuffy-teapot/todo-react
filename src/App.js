import { useState } from "react";

import Expenses from "./components/ExpenseWrapper";
import "./App.css";
const ToDoData = [
  {
    id: "a",
    title: "Toilet paper",
    price: "9.99",
    date: {
      year: "2023",
      month: "January",
      day: "15",
    },
  },
  {
    id: "b",
    title: "New Television",
    price: "449.90",
    date: {
      year: "2023",
      month: "February",
      day: "20",
    },
  },
  {
    id: "c",
    title: "New Iphone",
    price: "799.99",
    date: {
      year: "2023",
      month: "March",
      day: "8",
    },
  },
  {
    id: "d",
    title: "New PC",
    price: "1349.90",
    date: {
      year: "2023",
      month: "july",
      day: "1",
    },
  },
];
function App() {
  const [fake_data, fake_data_upd] = useState(ToDoData);

  return (
    <>
      <div className="expenses">
        <Expenses expenses={fake_data} />
      </div>
    </>
  );
}

export default App;