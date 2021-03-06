import React, {useContext, useState} from 'react';
import ResultCard from "./ResultCard";
import style from "../css/catalog.module.css";
import load from "../css/loading.module.css";
import Select from 'react-select';
//

//
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

//
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import makeAnimated from "react-select/animated/dist/react-select.esm";
import {ProductsContext} from "../context";

//
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
//
const animatedComponents = makeAnimated();
const handleCheckboxChange = (event) => {
    console.log(event.target.checked)
}
function test() {
    console.log("test")
}



function Catalog(props) {
    let [loading, setLoading] = useState(false)

    loading = props.open.isLoading
    const context = useContext(ProductsContext)

    return (
        <section className={style.catalog}>
            <div className={style.filters}>
                <div className={style.filterItem}><span className={style.title}>Популярные фильтры</span>
                    <ul className={style.filters_top}>

                        <li className={style.list_item}>
                            <Checkbox
                                onChange={context.setFilters}
                                value={{value: "credit"}}/>
                            <p className={style.list_name}>Оплата частями</p>
                        </li>
                        <li className={style.list_item}>
                            <Checkbox
                                onChange={context.setFilters}
                                value={{value: "delivery"}}
                            />
                            <p className={style.list_name}>Бесплатная доставка</p>
                        </li>
                        <li className={style.list_item}>
                            <Checkbox
                                onChange={context.setFilters}
                                value={{value: "inStock"}}
                            />
                            <p className={style.list_name}>В наличии</p>
                        </li>

                    </ul>
                </div>
                <div className={style.filterItem}>
                    <div className={style.range}>
                        <div className={style.rangeManage}>
                            <span className={style.rangeTitle}>Цена от</span>
                            <span>{context.tempMin}</span>

                            <span>до {context.tempMax}</span>

                            <button onClick={context.handleSubmit}>показать</button>

                        </div>


                        <Range min={0} max={60000} step={500}
                               defaultValue={[15000,45000]}
                               onChange={context.handleChange}
                               handle={context.handle}/>
                    </div>

                </div>

                <div className={style.filterItem}>
                    <span className={style.title}>Торговая марка</span>
                    <ul className={style.filters_top}>
                        <li className={style.list_item}><Checkbox
                            onChange={context.setFilters}
                            value={{value: "Apple", type: "brand"}}
                        />
                            <p className={style.list_name}>Apple</p>
                        </li>
                        <li className={style.list_item}>
                            <Checkbox
                                onChange={context.setFilters}
                                value={{value: "Asus", type: "brand"}}
                            />
                            <p className={style.list_name}>Asus</p>
                        </li>
                    </ul>
                </div>
                <div className={style.filterItem}>
                    <span className={style.title}>Видеокарта</span>
                    <ul className={style.filters_top}>
                        <li className={style.list_item}><Checkbox
                            onChange={context.setFilters}
                            value={{value: "discrete", type: "video"}}
                        />
                            <p className={style.list_name}>Дискретная</p></li>
                        <li className={style.list_item}><Checkbox
                            onChange={context.setFilters}
                            value={{value: "integrated", type: "video"}}
                        />
                            <p className={style.list_name}>Интегрированя</p></li>
                    </ul>
                </div>
            </div>
            <div className={style.results}>
                <div className={style.resultsHeader}>
                    <div className={style.resultsTitle}>
                        <span>{context.sortedProducts.length} товаров найдено</span>
                    </div>
                    <div className={style.select}>
                        <Select
                            className="basic-single"
                            name="color"
                            onChange={context.sortProducts}
                            defaultValue={{value: "sort", label: "Отсортировать по..."}}
                            options={[{value: "priceLowest", label: "От дешевых к дорогим"}, {
                                value: "priceHeights",
                                label: "от дорогих к дешевым"
                            }, {value: "rating"},]}
                        />
                    </div>
                </div>
                {loading ? (
                    <div className={load.container}>
                        <div className={load.circle}></div>
                    </div>) : <div className={style.goods}>
                    {context.sortedProducts.map((product) => {
                        return (
                            <ResultCard product={product}
                                        open={props.open}
                                        filter={context}/>
                        )
                    })}
                </div>}

            </div>
        </section>
    );
}

export default Catalog;

