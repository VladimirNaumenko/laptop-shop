import React, {Component} from 'react';
import logo from "../images/logo.png";
import style from "../css/header.module.css";
import {Link} from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={style.header}>
                <div className={style.container}>
                    <div className={style.logoBox}>
                        <h1 className={style.main}>react</h1><span className={style.aditional}>laptops</span>
                    </div>
                    <ul className={style.list}>
                        <Link to='/'>
                            <li className={style.item}>Главная</li>
                        </Link>
                        <Link to='/about'>
                            <li className={style.item}>О проекте</li>
                        </Link>
                    </ul>
                    <Link to='/checkout'>
                        <div className={style.cart} onClick={() => {


                        }}>
                            <div className={style.checkout}>
                                <div className={style.shoppingCart}>
                                </div>
                                <span className={style.total}>
                                {this.props.total}</span>
                            </div>


                        </div>
                    </Link>

                </div>

            </section>
        );
    }
}

export default Header;