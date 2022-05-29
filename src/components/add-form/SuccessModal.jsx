import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { Link } from 'react-router-dom';
import './successmodal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#71ccca",
        borderRadius: '12px',
    },
};

Modal.setAppElement('body');

const SuccessModal = ( {modalOpen} ) => {
    return (
        <Modal
            isOpen={modalOpen}
            style={customStyles}
        >
            <div className="modal-inner">
                <label>Shop added successfully!</label>
                <img
                    src={require('../../assets/images/added-image.png')}
                    alt="shop-added"
                    className='added-image'
                />
                <Link to='/'>
                    <div className="take-home-button">
                        <i className="fi fi-rr-home"></i>
                        Home
                    </div>
                </Link>
            </div>
        </Modal>
    )
}

export default SuccessModal