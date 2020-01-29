import React, {Component, useContext} from 'react';
import Header from "../components/Header";
import {ProductsContext} from "../context";
import {FiltersContext} from "../components/FiltersContext";
import Catalog from "../components/Catalog";
import Modal from "../components/Modal";




function CatalogContainer() {
    const filter = useContext(FiltersContext)
    const context = useContext(ProductsContext)
    let sortedProducts = context.sortedProducts
    return (
        <React.Fragment>
                <Header total ={context.checkout.length}/>
                <Catalog products = {sortedProducts}
                         context = {context}
                         open={context}
                         close={context.close}
                         filter={filter}
                />
                <Modal item = {context.details}
                       close={context.close}
                       open={context.open}
                       addToCheckout={context.addToCheckout}
                       isAdded ={context.isAdded}
                       addInCart ={context.addInCart}
                       modalOpen={context.modalOpen}
                       context = {context}
                />
            </React.Fragment>

    );

}

export default CatalogContainer;

