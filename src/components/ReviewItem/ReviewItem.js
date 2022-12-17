import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import './ReviewItem.css';

const ReviewItem = ({ product, onRemoveFromCart }) => {
	const { _id, img, name, price, cartQuantity } = product;

	return <div className='reviewItem'>
		<figure>
			<img src={img} alt={name} />
		</figure>

		<div className='details'>
			<h6 className='name'>{name}</h6>
			<p className='body2 price'>Price: <span>${price}</span></p>
			<p className='body2 quantity'>Quantity: <span>{cartQuantity}</span></p>
		</div>

		<button className='btn btnDelete' onClick={() => onRemoveFromCart(_id)}>
			<FontAwesomeIcon style={{ color: "#ddd" }} className='deleteIcon' icon={faTrashCan} />
		</button>
	</div>
}
export default ReviewItem;