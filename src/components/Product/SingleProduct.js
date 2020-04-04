import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const SingleProduct = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://ema-john.herokuapp.com/product/' + productKey).then(res => res.json()).then(data => {
            setProduct(data);
        });
    }, [productKey]);

    return (
        <div className="singleProductPage">
            {
                product && <Product showCartBtn={false} product={product}></Product>
            }
        </div>
    );
};

export default SingleProduct;