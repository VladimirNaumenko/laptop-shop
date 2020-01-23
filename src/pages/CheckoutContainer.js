import React, {Component, useContext} from 'react';
import Header from "../components/Header";
import Checkout from "../components/Checkout";
import {ProductsContext} from "../context";

function CheckoutContainer() {
    const context = useContext(ProductsContext)
    let sortedProducts = context.sortedProducts
    return (
        <React.Fragment>
            <Header total={context.checkout.length}/>
            <Checkout checkout={context.checkout}
                      totalSum={context.total}
                      remove = {context.removeFromCheckout}
            />
        </React.Fragment>

    );

}

export default CheckoutContainer;