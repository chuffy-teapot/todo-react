import { useState } from "react";

function ExpenseItem({ title = "Toilet Paper", price = "99.5", date }) {
  const [ToDoItem, ToDoItemUpd] = useState({ title, price ,date });

  const ExpensesDone = () => {
    if(ToDoItem.price != "00.0"){
      ToDoItemUpd({
        title: title,
        price: "00.0",
        date: {
          day:"✔️",
        },
      });
    }
    else{
      ToDoItemUpd({
        title: title,
        price: price,
        date: {
          month: date.month,
          day: date.day,
          year: date.year,
        },
      });
    }
  };

  return (
    <>
      <div className="expense_wrapper">
        <div className="expense_date">
          <p className="expense_month">{ToDoItem.date.month}</p>
          <p className="expense_year">{ToDoItem.date.year}</p>
          <p className="expense_day">{ToDoItem.date.day}</p>
        </div>

        <div className="expense_content">
          <p className="expense_title">{ToDoItem.title}</p>
          <p className="expense_price">${ToDoItem.price}</p>
        </div>

        <button onClick={ExpensesDone} className="done_btn">Done</button>
      </div>
    </>
  );
}

export default ExpenseItem;