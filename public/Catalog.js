import React, {useContext} from 'react';
import ResultCard from "./ResultCard";
import style from "../css/catalog.module.css";
import Select from 'react-select';
//
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import Range from 'rc-slider';
import Slider from 'rc-slider'
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
//
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import makeAnimated from "react-select/animated/dist/react-select.esm";
import {CarsContext} from "../context";


function onChange(e) {
    console.log('Checkbox checked:', (e.target.checked));
}

function Catalog(props) {
    const context = useContext(CarsContext)
    const handleSliderChange = (event) => {
        console.log(event)
    }
    const fruits = ['apple', 'watermelon'];

    const setFruits = (value) => {
        console.log(value)

    }

    return (
        <section className={style.catalog}>
            <div className={style.filters}>
                <div className={style.filterItem}><span className={style.title}>Популярные фильтры</span>
                    <ul className={style.filters_top}>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Оплата частями</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Акции</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>В наличии</p> </li>

                    </ul></div>
                <div className={style.filterItem}>
                    <div className={style.range}>
                        <span className={style.title}>Цена</span>
                        <Range min={1} max={20} defaultValue={18} step={1}
                            // tipFormatter={value => `${value}%`}
                               onChange = {context.handleChange}
                               handle={context.handle}/>
                    </div>
                </div>

                <div className={style.filterItem}>
                    <span className={style.title}>Торговая марка</span>
                    <ul className={style.filters_top}>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Оплата частями</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Акции</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>В наличии</p> </li>

                    </ul>
                </div>

                <div className={style.filterItem}>
                    <span className={style.title}>Диагональ</span>
                    <ul className={style.filters_top}>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Оплата частями</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Акции</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>В наличии</p> </li>

                    </ul>
                </div>
                <div className={style.filterItem}>
                    <span className={style.title}>Процессор</span>
                    <ul className={style.filters_top}>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Оплата частями</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>Акции</p> </li>
                        <li className={style.list_item}>                    <Checkbox
                            defaultChecked
                            onChange={onChange}
                        />
                            <p className={style.list_name}>В наличии</p> </li>

                    </ul>
                </div>
            </div>
            <div className={style.results}>
                <div className={style.resultsHeader}>
                    <div className={style.resultsTitle}>
                        <span>5 товаров найдено</span>
                    </div>
                    <div className={style.select}>
                        <Select
                            className="basic-single"
                            name="color"
                            defaultValue={[{value:"sort", label: "Отсортировать по..."}]}
                            // options={}
                        />
                    </div>
                </div>
                <div className={style.goods}>
                <div className=""><p>fsd</p></div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;
const animatedComponents = makeAnimated();
const handleCheckboxChange = (event) => {
    console.log(event.target.checked)
}