import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, stock, wholePrice, key } = props.product;

    return (
        <div className="product">
            <div className="imgWrap">
                <img src={img} alt="product img" />
            </div>

            <div className="details">
                <h2><Link to={"/product/" + key} className="name">{name}</Link></h2>

                <div className="information">
                    <div>
                        <small>by: {seller}</small>

                        <p className="price">$ {wholePrice}</p>

                        <small>Only {stock} left in stock - Order soon</small>

                        {props.showCartBtn && <button onClick={() => props.addProductToCart(props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
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
                </div> {/* Information */}
            </div> {/* Details */}
        </div> // Product
    );
};

export default Product;