import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import Modal from "../../components/Modal/Modal"; // Make sure to import your Modal component

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (getTotalCartAmount() === 0) {
            alert('Your cart is empty!')
            return
        }
        setShowConfirmation(true)
    }

    return (
        <form className='place-order' onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className="title">Personal Information</p>
                <div className="multi-fields">
                    <input 
                        type="text" 
                        placeholder='First Name'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder='Last Name'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <input 
                    type="email" 
                    placeholder='Email address'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input 
                    type="tel" 
                    placeholder='Phone Number'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <p className="pickup-instructions">
                    Your order will be ready for pickup in approximately 20-30 minutes.
                </p>
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Order Summary</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₨{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Service Fee</p>
                            <p>₨{getTotalCartAmount() === 0 ? 0 : 20}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₨{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button type="submit">PLACE ORDER FOR PICKUP</button>
                </div>
            </div>

            {/* Order Confirmation Modal */}
            {showConfirmation && (
                <Modal 
                    message={`Thank you for your order, ${formData.firstName}! Your food will be ready for pickup shortly.`}
                    onClose={() => {
                        setShowConfirmation(false)
                        // You might want to clear the cart here
                    }}
                />
            )}
        </form>
    )
}

export default PlaceOrder