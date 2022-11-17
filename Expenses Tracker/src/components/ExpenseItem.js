//component in react is just a javascript function
//import the related CSS file
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React from 'react';
//use props as the parameter, then access attributes in App.js by using props.notation to access them by same name as they are in App.js
function ExpenseItem(props) {
    //JSX code
    return (
        //new syntax for adding class
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;