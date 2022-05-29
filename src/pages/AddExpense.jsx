import React from 'react'
import './addexpense.css'
import Topfold from '../components/topfold/Topfold'
import AddForm from '../components/add-form/AddForm'

const AddExpense = () => {
  return (
    <div className='add-expense'>
        <Topfold />
        <AddForm />
    </div>
  )
}

export default AddExpense