import React, {Component} from 'react';
import s from "../css/checkout.module.css";



function Checkout(props) {
    const {checkout} = props
    console.log(props)
    return (
        <section className={s.container}>
            <div className={s.list}>
                {checkout.map((e) => {
                    return (<div className={s.item}>
                        <div
                            className={s.img}
                            style={{backgroundImage: `url(${e.img})`}}></div>
                        <div className={s.title}>{e.brand} {e.model}</div>
                        <div>{e.price}</div>
                        <div onClick={() => {
                            props.remove(e)
                        }}>
                            <i className="fas fa-trash"></i>
                        </div>
                    </div>)
                })}

            </div>
            <div className={s.total}>
                <h4 onClick={() => {
                console.log(props)

                 }}>К оплате: {props.totalSum}</h4>
            </div>
        </section>
    );
}

export default Checkout;