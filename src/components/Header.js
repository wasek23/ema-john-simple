import React from 'react';
import logo from '../img/logo.png';
import Auth from './Login/useAuth';

const Header = () => {
    const auth = Auth();

    return (
        <div className="header">
            <div className="headerTop">
                <a href="/">
                    <img src={logo} alt="Logo" className="logo" />
                </a>

                <div>
                    {
                        auth.user ? <span className="userInfo"><h3>{auth.user.name}</h3><img src={auth.user.photo} alt="User Pic" /><a href="/login" className="btn">Logout</a></span> : <a href="/login" className="btn">Login</a>
                    }
                </div>
            </div>


            <nav>
                <a href="/shop">Shop</a>
                <a href="/cart-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;