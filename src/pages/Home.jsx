import React from 'react'
import ExpenseList from '../components/expense-list/ExpenseList'
import Topfold from '../components/topfold/Topfold'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Topfold />
      <ExpenseList />
    </div>
  )
}

export default Home