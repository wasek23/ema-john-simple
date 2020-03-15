import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import CartDetails from './CartDetails';

const Shop = () => {
    // Get 10 Products Data
    const first10Data = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10Data);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const productValues = Object.values(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(prod => prod.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    // Add product in cart when "Add to cart" btn clicked
    const addProductToCart = product => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(prod => prod.key === toBeAddedKey);

        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;

            const othersProduct = cart.filter(prod => prod.key !== toBeAddedKey);
            newCart = [...othersProduct, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="productPage">
            <div className="productsContainer">
                {
                    products.map(prod => <Product key={prod.key} showCartBtn={true} product={prod} addProductToCart={addProductToCart}></Product>)
                }
            </div>

            <div className="cartContainer">
                <CartDetails cart={cart}>
                    <Link to="/cart-review">
                        <button className="btn">Review your order</button>
                    </Link>
                </CartDetails>
            </div>
        </div>
    );
};

export default Shop;