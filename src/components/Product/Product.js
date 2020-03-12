import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, stock, wholePrice } = props.product;

    const product = { name: 'Mobile', price: 200, quantity: 20 };
    const { quantity } = product;

    // console.log(props.addProductToCart);
    return (
        <div className="product">
            <div className="imgWrap">
                <img src={img} alt="Product Image" />
            </div>

            <div className="details">
                <a href="/singleProduct" className="name">{name}</a>

                <div className="information">
                    <div>
                        <small>by: {seller}</small>

                        <p className="price">$ {wholePrice}</p>

                        <small>Only {stock} left in stock - Order soon</small>

                        <button onClick={props.addProductToCart.bind(this, props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                    </div>

                    <div>
                        <div className="reviewStar">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>

                        <h3 className="reviewTitle">Features</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;