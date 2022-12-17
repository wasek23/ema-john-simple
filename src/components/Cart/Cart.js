import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import './Cart.css';

const Cart = ({ cart, onClearCart, children }) => {
	const totalPrice = cart.reduce((prev, current) => prev + (current.price * current.cartQuantity), 0);
	const shippingCharges = cart.reduce((prev, current) => prev + current.shipping, 0);
	const tax = parseFloat((totalPrice * 0.1).toFixed(2));
	const grandTotal = parseFloat((totalPrice + shippingCharges + tax).toFixed(2));

	return <div className='cartArea'>
		<div className='cartDetails'>
			<h5>Order Summary</h5>

			<p className='body1'>Selected Items: {cart.length}</p>
			<p className='body1'>Total Price: ${totalPrice}</p>
			<p className='body1'>Total Shipping Charges: ${shippingCharges}</p>
			<p className='body1'>Tax (10%): ${tax}</p>

			<h6>Grand Total: ${grandTotal}</h6>
		</div>

		<button className='btn delete body1' onClick={onClearCart}>
			Clear Cart <FontAwesomeIcon icon={faTrashCan} />
		</button>

		{children}
	</div>
}
export default Cart;