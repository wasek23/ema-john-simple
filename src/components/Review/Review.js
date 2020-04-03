import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import CartItem from './CartItem';
import CartDetails from '../Shop/CartDetails';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart, setCart] = useState([]);

    const auth = useAuth();

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const productCounts = Object.values(savedCart);

        fetch('http://localhost:8080/getProductsByKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        }).then(res => res.json()).then(data => {
            const cartProducts = productKeys.map(key => {
                const product = data.find(prod => prod.key === key);
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cartProducts);
        });
    }, []);

    // Remove product from cart when "Remove" btn clicked
    const removeProduct = productKey => {
        const newCart = cart.filter(prod => prod.key !== productKey);
        setCart(newCart);

        removeFromDatabaseCart(productKey);
    }


    return (
        <div className="productPage">
            <div className="productsContainer">
                {
                    cart.map(prod => <CartItem key={prod.key} removeProduct={removeProduct} product={prod}></CartItem>)
                }
                {
                    !cart.length && <h1>Your cart is empty. <a href="/shop">Shop something</a></h1>
                }
            </div>

            <div className="cartContainer">
                <CartDetails cart={cart}>
                    <Link to="/shipment">
                        {
                            auth.user ? <button className="btn">Proceed Checkout</button> : <button className="btn">Login to Proceed</button>
                        }
                    </Link>
                </CartDetails>
            </div>
        </div>
    );
};

export default Review;