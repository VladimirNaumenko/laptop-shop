import React from 'react';
import style from "../css/modal.module.css";
import helper from "../css/resultCard.module.css"


function Modal(props) {

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
            <>
                <div className={style.modal}
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
                                        onClick={props.close}
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
            </>
        );
    } else {
        return null
    }

}

export default Modal;