import React from 'react';
import logo from '../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <img src={logo} alt="Logo" className="logo" />
            </a>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;