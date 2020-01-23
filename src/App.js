import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import CatalogContainer from "./pages/CatalogContainer";
import CheckoutContainer from "./pages/CheckoutContainer";
import About from "./pages/About";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={CatalogContainer}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/checkout" component={CheckoutContainer}/>

        </Switch>
    );
}

export default App;