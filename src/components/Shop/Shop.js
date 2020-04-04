import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import CartDetails from './CartDetails';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://ema-john.herokuapp.com/products').then(res => res.json()).then(data => {
            setProducts(data);
        });
    }, []);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const productValues = Object.values(savedCart);

        if (products.length) {
            const cartProducts = productKeys.map(key => {
                const product = products.find(prod => prod.key === key);
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cartProducts);
        }
    }, [products]);

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