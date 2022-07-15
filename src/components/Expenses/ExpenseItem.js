import React from 'react'
//useState allows us to define values as state where changes would reflect in component function.
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

//We must only have one root element per return statement
//props receive data in object form where we can use its values using .
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
    </Card>
    //No paranthesis in clickHandler because javascript will execute it while compiling.
  )
}

export default ExpenseItem
