import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import { getDatabaseCart, clearCart } from '../../utilities/databaseManager';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const [shipInfo, setShipInfo] = useState(null);
    const [orderId, setOrderId] = useState(null);

    const auth = useAuth();

    const stripePromise = loadStripe('pk_test_KnoYbUJbjc65tHtBWXYBW6fg006ohxzAIH');

    const onSubmit = data => {
        setShipInfo(data);
    }

    const handlePlaceOrder = payment => {
        // TODO: Wasek Bellah, move this after payment
        const savedCart = getDatabaseCart();
        const orderDetails = { email: auth.user.email, cart: savedCart, shipment: shipInfo, payment: payment }
        fetch('https://ema-john.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        }).then(res => res.json()).then(order => {
            setOrderId(order._id);
            clearCart();
        });
    }

    return (
        <div className="container shipmentPage">
            <div className="shipForm toggleBox" style={{ display: shipInfo ? 'none' : 'block' }}>
                <h2>Shipment Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name" />
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="E-mail" />
                    {errors.email && <span className="error">E-mail is required</span>}

                    <input name="phone" ref={register({ required: true })} placeholder="Phone number" />
                    {errors.phone && <span className="error">Phone number is required</span>}

                    <input name="addressLine1" ref={register({ required: true })} placeholder="Address Line 1" />
                    {errors.addressLine1 && <span className="error">Address is required</span>}
                    <input name="addressLine2" ref={register({ required: true })} placeholder="Address Line 2" />

                    <input name="city" ref={register({ required: true })} placeholder="City" />
                    {errors.city && <span className="error">City Code is required</span>}

                    <input name="zipCode" ref={register({ required: true })} placeholder="Zip Code" />
                    {errors.zipCode && <span className="error">Zip Code is required</span>}

                    <input name="country" ref={register({ required: true })} placeholder="Country" />
                    {errors.country && <span className="error">Country is required</span>} <br />

                    <input className="btn" type="submit" value="Continue &rarr;" />
                </form >
            </div>

            <div className="paymentInfo toggleBox" style={{ display: shipInfo ? 'block' : 'none' }}>
                <h2>Payment Information</h2>

                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                </Elements>
                <br />
                {
                    orderId && <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <h3 style={{ color: "green" }}>Thank you for shopping with us</h3>
                        <p>Your order id is {orderId}</p>
                    </div>
                }
            </div>
        </div>

    );
};

export default Shipment;