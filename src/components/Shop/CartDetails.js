import React from 'react';

const CartDetails = (props) => {
    const cart = props.cart;

    // Get cart values
    // const itemsPrice = cart.reduce((prices, prod) => prices + prod.price * prod.quantity, 0);
    let itemsPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const prod = cart[i];
        itemsPrice = itemsPrice + prod.price * prod.quantity;
    }

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
        <div>
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
                {props.children}

                <p>{}</p>
            </div>
        </div>
    );
};

export default CartDetails;