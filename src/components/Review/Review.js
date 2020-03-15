import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import CartItem from './CartItem';
import CartDetails from '../Shop/CartDetails';
import happyImg from '../../img/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);
    const orderBtnHandler = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        console.log(orderPlaced + "Thanks for your Order !!!!!!");
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const productCounts = Object.values(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(prod => prod.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);
    }, []);

    // Remove product from cart when "Remove" btn clicked
    const removeProduct = productKey => {
        const newCart = cart.filter(prod => prod.key !== productKey);
        setCart(newCart);

        removeFromDatabaseCart(productKey);
    }


    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImg} alt="Happy Img" />
    }
    return (
        <div className="productPage">
            <div className="productsContainer">
                {
                    cart.map(prod => <CartItem key={prod.key} removeProduct={removeProduct} product={prod}></CartItem>)
                }
                {thankYou}
            </div>

            <div className="cartContainer">
                <CartDetails cart={cart}>
                    <button onClick={orderBtnHandler} className="btn">Place order</button>
                </CartDetails>
            </div>
        </div>
    );
};

export default Review;