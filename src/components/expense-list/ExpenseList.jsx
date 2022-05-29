import React from 'react'
import { useSelector } from 'react-redux'
import './expenselist.css'
import Card from './Card';
import { toast, ToastContainer } from 'react-toastify';

const ExpenseList = () => {

  const { shopList: list, query } = useSelector((state) => state.shops);
  const updatedList = list.filter(
    (item) => {
      console.log(new Date(query));
      if (!isNaN(new Date(query))) {
        return ((new Date(item.openingDate) < new Date(query)) && (new Date(item.closingDate) > new Date(query)));
      }
      else {
        return (item.title.includes(query) || item.category.title.includes(query) || item.shopCategory.title.includes(query));
      }
    }
  );
  const notifySuccess = () => toast.success("Expense deleted.");

  return (
    <div className='expense-list'>
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
      {updatedList.length ? (
        updatedList.map((item) => <Card item={item} notifySuccess={notifySuccess} />)
      ) : (
        <div className='empty-state'>
          <img
            src={require("../../assets/images/empty.png")}
            alt='Empty List'
            className='empty-image'
          />
          <label>Uh Oh! Your shop list is empty</label>
        </div>
      )}
    </div>
  )
}

export default ExpenseList