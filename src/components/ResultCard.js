import React from 'react';
import style from "../css/resultCard.module.css";
import Modal from "./Modal";

import image from "../images/asus_rog.jpg"

function ResultCard(props) {
    const {
        id,
        img,
        delivery,
        brand,
        model,
        price,
        processor,
        RAM,
        graphic,
        credit,
        discount,
        inStock,
        screen,
        parameters
    } = props.product;
    return (
        <>
        <div className={style.resultCard}>
            <div className={style.features}>
                {function() {
                    if (delivery) {
                        return (<span className={style.delivery}>Бесплатная доставка</span>)}
                }()}
                {function() {
                    if (credit) {
                        return (<div className={style.credit}>Оплата частями</div>)}
                }()}
            </div>
            <div className={style.img}>
                <div className={style.imgCont} style={{backgroundImage: `url(${props.product.img})`}}>
                </div>
            </div>
            <div className={style.details}>
                <div className={style.name}>
                    <span>{brand} {model}</span>
                </div>
                <div className={style.price}>{price} грн.</div>
                {/*<div className={style.screen}>диагональ 17.5</div>*/}
                <div className={style.price}></div>
                <div className={style.rating}></div>
                {/*<div className={style.parameters}>{parameters}</div>*/}
                <div className={style.stock}>
                    <i className="fas fa-check-circle"><span className={style.stockLabel}>В наличии!</span> </i>
                </div>
            </div>
            <div className={style.button} onClick={
                () => {
                    props.open.open(props.product)
                 }

                }>купить</div>
        </div>

            </>
    );
}

export default ResultCard;