import './Products.css';
import Product from '../Product/Product';

const Products = ({ products, onAddToCart }) => {
	return <div className='products'>
		{products?.map(product => <Product key={product._id} product={product} onAddToCart={onAddToCart} />)}
	</div>
}
export default Products;