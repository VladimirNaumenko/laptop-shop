import React, {useState} from 'react';
import style from "../css/resultCart.module.css";
import Modal from "./Modal";


function ResultCart(props) {
    const {id, img, delivery, brand, model, price, processor, RAM, graphic, credit, discount, inStock, screen, parameters
    } = props.product;
    const [close, setClose] = useState(false);
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
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
                    <img src={img}
                         // style={close ? {
                         //     height: "140%",
                         //     width: "140%"} : null}
                         className={style.im} alt=""/>
                </div>
                {close?(<p>{model}</p>):null}
                <div className={style.details}>
                    <div className={style.name}>
                        <span>{brand} {model}</span>
                    </div>
                    <div className={style.price}>{price} грн.</div>
                    {/*<div className={style.screen}>диагональ 17.5</div>*/}
                    <div className={style.price}></div>
                    <div className={style.rating}></div>
                    {/*<div className={style.parameters}>{parameters}</div>*/}
                    <div className={style.details}>
                        <i className="fas fa-check-circle"><span className={style.stockLabel}>В наличии!</span> </i>
                    </div>
                    <div className={style.manage}>
                        <div className={style.cardBtn}
                             onClick={
                                 () => {
                                     props.open.open(props.product)
                                 }}
                        >Купить</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ResultCart;