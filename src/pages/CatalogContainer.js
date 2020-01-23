import React, {Component, useContext} from 'react';
import Header from "../components/Header";
import {ProductsContext} from "../context";
import Catalog from "../components/Catalog";
import Modal from "../components/Modal";




function CatalogContainer() {
    const context = useContext(ProductsContext)
    let sortedProducts = context.sortedProducts
    return (
        <React.Fragment>
                <Header total ={context.checkout.length}/>
                <Catalog products = {sortedProducts} open={context} close={context.close} />
                <Modal item = {context.details}
                       close={context.close}
                       open={context.open}
                       addToCheckout={context.addToCheckout}
                       isAdded ={context.isAdded}
                       addInCart ={context.addInCart}
                />
            </React.Fragment>

    );

}

export default CatalogContainer;

