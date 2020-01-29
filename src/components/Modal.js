
import React, { useState, useEffect } from 'react';
import style from "../css/modal.module.css";
import helper from "../helper/resultCard.module.css"
import Radium, {StyleRoot} from 'radium';
import {bounce, fadeIn,fadeOut} from "react-animations";


function Modal(props) {
    const [close, setClose] = useState(false);
    useEffect(() => {

    }, [])
    console.log(props.context.details)
    const styles = {
        fadeOut: {
            animation: `x 3s`,
            animationName: Radium.keyframes(fadeOut, 'fadeOut')
        },
        fadeIn: {
            animation: `x 1s`,
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        },
        bounce: {
            animation: 'x 4s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }
    if (props.item) {
        const {
            id,
            img,
            brand,
            model,
            price,
            delivery,
            processor,
            RAM,
            graphic,
            credit,
            discount,
            inStock,
            screen,
            parameters
        } = props.item

        return (
            <StyleRoot>
                <div className={style.modal}
                     // style={close?{display: "none"}:{display: "block"}}
                     id="modal"
                     onClick={props.close}>
                    <div className={style.modalContent}>
                        <div className={style.modalDetails}>
                            <div className={style.features}>
                                {!!credit? (<div className={helper.credit}>Оплата частями</div>):null}
                                {!!delivery? (<div className={helper.delivery}>Бесплатная доставка</div>):null}
                            </div>

                            <div className={style.modalTitle}>
                                <span>{brand} <br/>{model}</span>
                            </div>
                            <div className={style.modalPrice}>
                                <span>{price}грн.</span>
                            </div>
                            <div className={style.modalText}>
                                <span>{parameters}</span>
                            </div>
                            <div className={style.modalManage}>
                                <button className={`${style.button} ${style.btnBlue}`}
                                        id="modalBtn"
                                        onClick={ () => {

                                            setClose(!close)
                                         }
                                            }
                                >Вернуться назад
                                </button>
                                <button className={`${style.button} ${style.modalAddToCart}`}
                                onClick={props.addToCheckout}
                                >{props.isAdded?(<span>Добавлено</span>):(<span>Добавить в корзину</span>)}
                                </button>
                            </div>
                        </div>
                        <div className={style.modalImgContainer}>
                            <div className={style.modalImg}
                                 style={{backgroundImage: `url(${img})`}}/>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        );
    } else {
        return null
    }

}

export default Modal;