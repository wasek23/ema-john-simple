import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import UrlError from './components/UrlError.js/UrlError';
import SingleProduct from './components/Product/SingleProduct';

function App() {
    return (
        <div>
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

                    <Route path="*">
                        <UrlError></UrlError>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
