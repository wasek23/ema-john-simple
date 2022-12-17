import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Shop.css';
import { apiUrl } from '../../utils/links';
import useCart from '../../hooks/useCart';
import usePagination from '../../hooks/usePagination';
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';
import Pagination from '../../components/Pagination/Pagination';

const Shop = () => {
	const { productsLength } = useLoaderData();
	const { cart, onAddToCart, onClearCart } = useCart();
	const pageSize = 9;
	const { pages, page, setPage } = usePagination(productsLength, pageSize);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const url = `${apiUrl}/products?page=${page}&size=${pageSize}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setProducts(data?.products));
	}, [page, pageSize]);


	return <main className='shopPage'>
		<div className='productContainer'>
			<Products products={products} onAddToCart={onAddToCart} />

			<Pagination pages={pages} page={page} setPage={setPage} />
		</div>

		<aside className='cartContainer'>
			<Cart products={products} cart={cart} onClearCart={onClearCart}>
				<Link to='/order'>
					<button className='btn review body1'>
						Review Order <FontAwesomeIcon icon={faArrowRight} inverse />
					</button>
				</Link>
			</Cart>
		</aside>
	</main>
}
export default Shop;