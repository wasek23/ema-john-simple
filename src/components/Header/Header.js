import { useContext } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';

import './Header.css';
import logo from '../../img/Logo.svg';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
	const navigate = useNavigate();
	const { user, logout } = useContext(AuthContext);

	const onLogout = (e) => {
		e.preventDefault();
		logout();
		navigate('/login');
	}

	const linkClassName = isActive => `body1 ${isActive ? 'active' : ''}`

	return <header className='mainHeader'>
		<nav className='container'>
			<a href='/'><img src={logo} alt='Logo' /></a>

			<ul>
				<li><NavLink className={linkClassName()} to='/'>Shop</NavLink></li>
				<li><NavLink className={linkClassName()} to='/order'>Order</NavLink></li>
				<li><NavLink className={linkClassName()} to='/order-review'>Order Review</NavLink></li>
				<li><NavLink className={linkClassName()} to='/inventory'>Inventory</NavLink></li>

				{user?.uid ?
					<li className='body1' onClick={onLogout}>Logout</li> :
					<li><NavLink className={linkClassName()} to='/login'>Login</NavLink></li>
				}
				<li className='body1 user'>{user?.email}</li>
			</ul>
		</nav>
	</header>
}
export default Header;