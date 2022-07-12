import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

//We must only have one root element per return statement
//props receive data in object form where we can use its values using .
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
