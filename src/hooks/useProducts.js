import { useEffect, useState } from 'react'
import { apiUrl } from '../utils/links';

const useProducts = () => {
	const [products, setProducts] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			setIsLoading(true);

			fetch(`${apiUrl}/products`)
				.then(res => res.json())
				.then(data => setProducts(data?.products));
		}
		catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { products, isLoading, error }
}
export default useProducts;