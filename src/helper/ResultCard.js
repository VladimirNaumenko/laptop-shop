import React, {useState} from 'react';
import style from "./resultCard.module.css";
import Modal from "../components/Modal";

import image from "../images/asus_rog.jpg"

function ResultCard(props) {
    const [close, setClose] = useState(false);
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
        <div className={style.resultCard}
             style={close ? {position: 'absolute'} : null}
        >
            <div className={style.wrapper}
                 style={close ? {height: "500px", position: 'absolute'} : null}>
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
            <div className={style.img}
                 onClick={() => {
                 setClose(!close)}}
                 >
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
            {/*{close?<div>{parameters}</div>:null}*/}
            <div className={style.button} onClick={
                () => {
                    props.open.open(props.product)
                 }
                }>купить</div>
            </div>
        </div>

            </>
    );
}

export default ResultCard;