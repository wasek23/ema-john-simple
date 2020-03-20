import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();

    const signInBtn = () => {
        auth.signInWithGoogle().then(res => {
            window.location.pathname = "/cart-review"
        });
    }
    const signOutBtn = () => {
        auth.signOut().then(res => {
            window.location.pathname = "/"
        });
    }

    return (
        <div style={{ textAlign: "center", padding: "10px" }}>
            {
                auth.user ? <button onClick={signOutBtn} className="btn">Sign Out</button> : <button onClick={signInBtn} className="btn">Google Sign In</button>
            }
        </div>
    );
};

export default Login;