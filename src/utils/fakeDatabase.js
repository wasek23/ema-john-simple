export const getStoredCart = () => {
	const storedCart = localStorage.getItem('emaCart');
	if (storedCart) {
		return JSON.parse(storedCart);
	}
	return [];
}

export const addToDBCart = (_id) => {
	const storedCart = getStoredCart();

	const isInCart = storedCart.find(c => c._id === _id);

	if (isInCart) {
		const index = storedCart.indexOf(isInCart);

		const newCart = [...storedCart];
		newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };

		localStorage.setItem('emaCart', JSON.stringify(newCart));
	} else {
		const newCart = [...storedCart, { _id, quantity: 1 }];

		localStorage.setItem('emaCart', JSON.stringify(newCart));
	}
}

export const removeFromDBCart = (_id) => {
	const storedCart = getStoredCart();
	const remaining = storedCart.filter(item => item._id !== _id);
	localStorage.setItem('emaCart', JSON.stringify(remaining));
}

export const onClearDBCart = () => {
	localStorage.removeItem('emaCart');
}

export const getInitialCart = (products) => {
	const storedCart = getStoredCart();

	let initialCart = [];

	products?.map(product => {
		for (const c of storedCart) {
			product._id === c._id && initialCart.push({ ...product, cartQuantity: c.quantity });
		}

		return null;
	});
	return initialCart;
}