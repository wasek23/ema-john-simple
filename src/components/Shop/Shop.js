import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    // Get 10 Products Data
    const first10Data = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10Data);

    // Add items in cart when "Add to cart" btn clicked
    const [cart, setCart] = useState([]);
    const addProductToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // Get cart values
    const itemsPrice = cart.reduce((prices, prod) => prices + prod.price, 0);

    let shippingPrice = 0;
    if (itemsPrice > 1000) {
        shippingPrice = 0;
    } else if (itemsPrice > 500) {
        shippingPrice = 4.99;
    } else if (itemsPrice > 250) {
        shippingPrice = 9.99;
    } else if (itemsPrice > 0) {
        shippingPrice = 14.99;
    }

    const subTotal = itemsPrice + shippingPrice;
    const tax = subTotal / 15;
    const grandTotal = subTotal + tax;

    return (
        <div className="shopContainer">
            <div className="productsContainer">
                {
                    products.map(prod => <Product product={prod} addProductToCart={addProductToCart}></Product>)
                }
            </div>

            <div className="cartContainer">
                <h2 className="textCenter">Order Summary</h2>
                <p className="textCenter">Item Ordered: {cart.length}</p>

                <div className="cartPrice">
                    <div className="cartPriceRow">
                        <small>Items: </small>
                        <small>$ {itemsPrice.toFixed(2)}</small>
                    </div>

                    <div className="cartPriceRow">
                        <small>Shipping & Handling:	 </small>
                        <small>$ {shippingPrice.toFixed(2)}</small>
                    </div>

                    <div className="cartPriceRow">
                        <small>Total before tax: </small>
                        <small>$ {subTotal.toFixed(2)}</small>
                    </div>

                    <div className="cartPriceRow">
                        <small>Estimated Tax: </small>
                        <small>$ {tax.toFixed(2)}</small>
                    </div>

                    <div className="cartPriceRow cartTotalRow">
                        <h3>Order Total: </h3>
                        <h3>$ {grandTotal.toFixed(2)}</h3>
                    </div>
                </div>

                <div className="textCenter">
                    <button className="btn">Review your order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;