import { useEffect, useState } from 'react';

import { addToDBCart, getInitialCart, getStoredCart, onClearDBCart, removeFromDBCart } from '../utils/fakeDatabase';
import { apiUrl } from '../utils/links';

const useCart = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	const storedCart = getStoredCart();

	useEffect(() => {
		const cartIds = storedCart.map(i => i._id);

		fetch(`${apiUrl}/productsByIds`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(cartIds)
		})
			.then(res => res.json())
			.then(data => setProducts(data));
	}, [storedCart]);

	// Get from localStorage
	useEffect(() => {
		setCart(getInitialCart(products));
	}, [products]);

	// On add to cart
	const onAddToCart = (product) => {
		addToDBCart(product._id);

		const isInCart = cart.find(c => c._id === product._id);

		if (isInCart) {
			const index = cart.findIndex(c => c._id === product._id);

			const newCart = [...cart];
			newCart[index] = { ...newCart[index], cartQuantity: newCart[index].cartQuantity + 1 };

			setCart(newCart);
		} else {
			const newCart = [...cart, { ...product, cartQuantity: 1 }];

			setCart(newCart);
		}
	}

	// On remove from cart
	const onRemoveFromCart = (_id) => {
		removeFromDBCart(_id);

		const remaining = cart.filter(c => c._id !== _id);
		setCart(remaining);
	}

	// On clear cart
	const onClearCart = () => {
		onClearDBCart();

		setCart([]);
	}

	return { cart, onAddToCart, onRemoveFromCart, onClearCart }
}
export default useCart;