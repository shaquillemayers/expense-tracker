import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


function Expenses(props) {
    const [enteredYear, setEnteredYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
        console.log('Expenses.js');
        console.log(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredYear;
    });

    return (
        <div className="expenses">
            <ExpensesFilter 
                selected={enteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />      
        </div>
    )
}

export default Expenses;