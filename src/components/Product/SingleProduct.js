import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from './Product';

const SingleProduct = () => {
    const { productKey } = useParams();

    const product = fakeData.find(prod => prod.key === productKey);
    return (
        <div className="singleProductPage">
            <Product showCartBtn={false} product={product}></Product>
        </div>
    );
};

export default SingleProduct;