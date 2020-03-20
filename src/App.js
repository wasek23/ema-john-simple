import React, { createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import UrlError from './components/UrlError.js/UrlError';
import SingleProduct from './components/Product/SingleProduct';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { PrivateRoute, AuthContextProvider } from './components/Login/useAuth';

function App() {
    return (
        <div>
            <AuthContextProvider value="Wasek Bellah" >
                <Header></Header>

                <Router>
                    <Switch>
                        <Route path="/shop">
                            <Shop></Shop>
                        </Route>

                        <Route path="/cart-review">
                            <Review></Review>
                        </Route>

                        <Route path="/inventory">
                            <Inventory></Inventory>
                        </Route>

                        <Route exact path="/">
                            <Shop></Shop>
                        </Route>

                        <Route path="/product/:productKey">
                            <SingleProduct></SingleProduct>
                        </Route>

                        <Route path="/login">
                            <Login></Login>
                        </Route>

                        <PrivateRoute path="/shipment">
                            <Shipment></Shipment>
                        </PrivateRoute>

                        <Route path="*">
                            <UrlError></UrlError>
                        </Route>
                    </Switch>
                </Router>
            </AuthContextProvider>
        </div>
    );
}

export default App;
