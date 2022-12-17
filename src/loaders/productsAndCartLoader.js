import { getInitialCart } from '../utils/fakeDatabase';
import { apiUrl } from '../utils/links';

const productsAndCartLoader = async () => {
	const { products: productsData } = await fetch(`${apiUrl}/products`);
	const products = await productsData.json();

	// Get stored cart
	const initialCart = getInitialCart(products);

	return { products, initialCart };
}
export default productsAndCartLoader;