import React from 'react'
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
      <button>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
