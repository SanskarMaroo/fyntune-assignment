import React, { useState } from 'react'
import './addform.css'
import { categories } from '../../constants/add-expense-category';
import { shopCategories } from '../../constants/shop-categories';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenses'

const AddForm = () => {

    const cat = categories;
    const shopCat = shopCategories;

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState();
    const [shopCategory, setShopCategory] = useState();
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [shopCategoryOpen, setShopCategoryOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [openingDate, setOpeningDate] = useState("");
    const [closingDate, setClosingDate] = useState("");

    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
    }

    const handleShopCategory = (category) => {
        setShopCategory(category);
        setShopCategoryOpen(false);
    }

    const handleSubmit = () => {

        var nameRegex = /^[a-zA-Z_ ]+$/;

        if (title === '' || openingDate === '' || closingDate === '' || !category || !shopCategory) {
            const notify = () => toast("Please enter all the fields!");
            notify();
        }
        else if(new Date(openingDate) > new Date(closingDate)) {
            const notify = () => toast("Closing date should be after Opening date!");
            notify();
        }
        else if(!nameRegex.test(title)) {
            const notify = () => toast("Name should only contain alphabets!");
            notify();
        }
        else {
            const data = {
                title,
                category,
                shopCategory,
                openingDate,
                closingDate,
                createdAt: new Date()
            };

            dispatch(addExpense(data));
            setModalOpen(true);
        }
    }

    return (
        <div className='add-form'>
            <ToastContainer
                position="bottom-left"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />

            <SuccessModal
                modalOpen={modalOpen}
            />

            <div className="form-item">
                <label>Shop Name</label>
                <input
                    type="text"
                    placeholder='Enter name of the shop'
                    value={title}
                    onChange={handleTitle}
                />
            </div>

            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : 'Areas'}</label>
                        <i className="fi fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen && (
                        <div className="category-container">
                            {cat.map((category) => (
                                <div
                                    className="category-item"
                                    key={category.id}
                                    onClick={() => handleCategory(category)}
                                >
                                    <label>{category.title}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => setShopCategoryOpen(!shopCategoryOpen)}>
                        <label>{shopCategory ? shopCategory.title : 'Shops'}</label>
                        <i className="fi fi-rr-angle-down"></i>
                    </div>
                    {shopCategoryOpen && (
                        <div className="category-container">
                            {shopCat.map((category) => (
                                <div
                                    className="category-item"
                                    key={category.id}
                                    onClick={() => handleShopCategory(category)}
                                >
                                    <label>{category.title}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="form-item">
                <label>Opening Date</label>
                <input
                    type="date"
                    value={openingDate}
                    onChange={(e) => setOpeningDate(e.target.value)}
                />
            </div>

            <div className="form-item">
                <label>Closing Date</label>
                <input
                    type="date"
                    value={closingDate}
                    onChange={(e) => setClosingDate(e.target.value)}
                />
            </div>

            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fi fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm