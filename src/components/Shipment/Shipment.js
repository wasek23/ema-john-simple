import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const auth = useAuth();
    const onSubmit = data => {
        // TODO: Wasek Bellah, move this after payment
        const savedCart = getDatabaseCart();
        const orderDetails = { email: auth.user.email, cart: savedCart }
        fetch('http://localhost:8080/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        }).then(res => res.json()).then(data => {
            alert('Successfully place your order with order ID: ' + data._id);
            processOrder();
        });
    }

    return (
        <div className="shipmentPage">
            <form className="shipForm" onSubmit={handleSubmit(onSubmit)} >
                <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="E-mail" />
                {errors.email && <span className="error">E-mail is required</span>}

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
    );
};

export default Shipment;