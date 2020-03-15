import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <img src={logo} alt="Logo" className="logo" />
            </a>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/cart-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;