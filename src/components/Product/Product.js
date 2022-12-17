import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({ product, onAddToCart }) => {
	const { img, name, price, seller, ratings } = product;

	return <div className='product'>
		<figure>
			<img src={img} alt={name} />
		</figure>

		<div className='content'>
			<h6 className='name'>{name}</h6>
			<p className='subtitle1 price'>Price: {price}</p>

			<p className='caption manufacturer'>Manufacturer: {seller}</p>
			<p className='caption rating'>Rating: {ratings} stars</p>
		</div>

		<button className='btn' onClick={() => onAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
	</div>
}
export default Product;