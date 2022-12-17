import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

import './Order.css';
import useCart from '../../hooks/useCart';
import Cart from '../../components/Cart/Cart';
import ReviewItem from '../../components/ReviewItem/ReviewItem';

const Order = () => {
	const { products } = useLoaderData();
	const { cart, onRemoveFromCart, onClearCart } = useCart(products);

	return <div className='orderContainer container'>
		<div className='productContainer'>
			{cart?.map(product => <ReviewItem key={product._id} product={product} onRemoveFromCart={onRemoveFromCart} />)}
		</div>

		<aside className='cartContainer'>
			<Cart products={products} cart={cart} onClearCart={onClearCart}>
				<Link to='/shipping'>
					<button className='btn review body1'>
						Processed Checkout <FontAwesomeIcon icon={faCreditCard} inverse />
					</button>
				</Link>
			</Cart>
		</aside>
	</div>
}
export default Order;