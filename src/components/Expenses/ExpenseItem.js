import React, { useState } from 'react'
//useState allows us to define values as state where changes would reflect in component function.
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

//We must only have one root element per return statement
//props receive data in object form where we can use its values using .
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  //shouldnt be called out of this function or in nested function.
  //props.title accepted by useState is initial state passed as an argument
  //useState returns an array where first value is variable itself and second is Updating Function.
  //In destructuring - first value(title) is pointer at that initialValue and second is function which we later call.

  const clickHandler = () => {
    setTitle('Updated')
    //Calling this function doesnt assigns new value to variable
    //Just React evaluates again.
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    //No paranthesis in clickHandler because javascript will execute it while compiling.
  )
}

export default ExpenseItem
