import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
    const { img, name, price, quantity, key } = props.product;
    // console.log(props.product);

    return (
        <div className="product">
            <div className="imgWrap">
                <img src={img} alt="product img" />
            </div>

            <div className="details">
                <h2><Link to={"/product/" + key} className="name">{name}</Link></h2>
                <p className="price">$ {price}</p>
                <p>Quantity: {quantity}</p>

                <button className="btn" onClick={() => props.removeProduct(key)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;