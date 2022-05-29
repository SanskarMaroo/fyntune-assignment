import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import './card.css'
import { deleteExpense } from '../../redux/actions/expenses'

const Card = ({ item, notifySuccess }) => {

  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item))
    notifySuccess();
  }

  return (
    <div className='card'>
      {/* <div className="card-img-container">
        <img
          src={item.category.icon}
          alt={item.category.title}
          className='card-image'
        />
      </div> */}
      <div className="card-info">
        <label className='card-title'>Shop Name : {item.title}</label>
        <label className='card-title'>Area : {item.category.title}</label>
        <label className='card-title'>Shop Category : {item.shopCategory.title}</label>
        <label className='card-title'>Opening Date : {item.openingDate}</label>
        <label className='card-title'>Closing Date : {item.closingDate}</label>
        <label className='card-time'>{time}</label>
      </div>
      <div className="card-right">
        <div onClick={handleDelete} className="delete-icon">
          <i className="fi fi-rr-trash"></i>
        </div>
      </div>
    </div>
  )
}

export default Card