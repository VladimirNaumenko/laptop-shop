import React, {Component, useContext} from 'react';
import Header from "../components/Header";
import {ProductsContext} from "../context";
import {FiltersContext} from "../components/FiltersContext";
import Catalog from "../components/Catalog";
import Modal from "../components/Modal";




function Home  (){
    const filter = useContext(FiltersContext)
    const context = useContext(ProductsContext)
    let sortedProducts = context.sortedProducts
        return (
            <React.Fragment>
                <Header total ={context.checkout.length}/>
                <Catalog products = {sortedProducts}
                         open={context}
                         close={context.close}
                         filter={filter}/>
                <Modal item = {context.details}
                       modalOpen={context.modalOpen}
                       close={context.close}
                       open={context.open}
                       addToCheckout={context.addToCheckout}
                       isAdded ={context.isAdded}
                       addInCart ={context.addInCart}
                />
            </React.Fragment>

        );

}

export default Home;

