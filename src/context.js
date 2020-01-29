import
    React, {Component} from 'react';
import mainData from "./data"

//slider
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;
//

const ProductsContext = React.createContext();
const ProductsConsumer = ProductsContext.Consumer;

export {ProductsProvider, ProductsContext, ProductsConsumer}


export let tempMinPrice = 0
export let tempMaxPrice = 0
let subtotal = 0

class ProductsProvider extends Component {
    state = {
        products: [...mainData],
        sortedProducts: [...mainData],
        details: false,
        checkout: [],
        total: 0,
        //modal
        isLoading: false,
        modalOpen: false,
        isAdded: false,
        //
        minPrice: 0,
        maxPrice: 100000,
        tempMax: 15000,
        tempMin: 45000,
        //filters
        Asus: false,
        Apple: false,
        Lenovo: false,
        credit: false,
        delivery: false,
        inStock: false,
        integrated: false,
        discrete: false
    }
    reset = () => {
        this.setState({Asus:false})
 //   this.setState({sortedProducts: [...mainData]})

     }
    //modal
    openModal = (product) => {
        if (!this.state.checkout.includes(product)) {
            this.setState({isAdded: false})
            this.setState({details: product})
        } else if (this.state.checkout.includes(product)) {
            this.setState({details: product})
            this.setState({isAdded: true})
        }
    }

    closeModal = (event) => {
        if (event.target.id === "modal"
            || event.target.id === "modalBtn"
        ) {
            this.setState({details: undefined})
            this.setState({isAdded: false})

        }
    }
    addToCheckout = () => {
        if (!this.state.isAdded) {
            let product = this.state.details;
            this.setState({checkout: [...this.state.checkout, product]}, () => {
                this.countTotal()
            })
            this.setState({isAdded: true})
        }

    }

    addInCart = () => {
        this.setState({isAdded: true})

    }
    //end of modal


    //total price
    countTotal = () => {
        let checkout = [...this.state.checkout]
        let total = 0
        total = checkout.reduce((sum, el) => {
            console.log(el)
            return sum + el.price;
        }, 0);
        this.setState({total: total})
    }
    //removing item from checkout
    removeFromCheckout = (event) => {
        let tempArr = [...this.state.checkout]
        tempArr = tempArr.filter(e => e !== event)
        console.log(tempArr)
        this.setState({checkout: [...tempArr]}, () => {
            this.countTotal()
        })
    }


//setting filters in state
    setFilters = (event) => {
        let item = event.target.value.value;

        this.setState({[item]: !this.state[item]}, this.filterProducts)

    }
    //filtering
    setFiltersBoost = (event) => {
        let item = event.target.value.value;
        let type = event.target.value.type;
        let condition = event.target.checked
        console.log(condition)

        if (type === "credit"|| type === "delivery"|| type === "delivery") {
            if (!condition){
                this.filterByTypeBoost(type,condition)
                return
            }
            this.filterByTypeBoost(type,condition)
        }
        else {
            this.filterByTypeBoost(type,condition)
        }

    }
    filterByTypeBoost = (type, condition) => {
        let items = [...mainData]
        if (condition){
            items = items.filter(element => element[type])
        }
        else if (!condition){
            this.setState({sortedProducts: [...items]})
        } this.setState({sortedProducts: [...items]})

    }




    screenFilter=(event)=>{
        console.log("screenFilter")
        let min = event.target.value.value[0]
        let max = event.target.value.value[1]
        let tempArr = [...this.state.sortedProducts];
        tempArr= tempArr.filter((e)=>{
            if (e.screen>= min&& e.screen<=max){
            return e
            }
        })
        console.log(tempArr)
        this.setState({sortedProducts: [...tempArr]})

    }
    filterProducts = () => {
        this.setState({isLoading: true})
        let tempArr = [...mainData];
        console.log(tempArr)
        const {Apple, Asus, credit, delivery, inStock, minPrice, maxPrice,integrated,discrete} = this.state
        tempArr = tempArr.filter(e => e.price > minPrice && e.price < maxPrice)
        if (credit) {
            console.log("credit")
            tempArr = tempArr.filter(e => e.credit === true)
            console.log(tempArr)
        }
        if (delivery) {
            tempArr = tempArr.filter(e => e.delivery === true)
        }
        if (inStock) {
            tempArr = tempArr.filter(e => e.inStock === true)
        }

        tempArr = tempArr.filter((e) => {
            if (Asus && Apple) {
                return e.brand
            }
            if (!!Apple) {
                console.log(e.brand)
                return e.brand === "Apple"
            }
            if (!!Asus) {
                console.log(e.brand)
                return e.brand === "Asus"
            } else {
                return e.brand
            }
        })
        tempArr = tempArr.filter((e)=>{
            if (!!integrated){
                return e.graphicType === "integrated"
            }
            if (!!discrete){
                return e.graphicType === "discrete"
            }
            else {
                return e.graphicType
            }
        })
        console.log(this.state)
        setTimeout(() => {
            this.setState({isLoading: false})
            this.setState({sortedProducts: [...tempArr]})
        }, 500)

    }


    //sorting by...
    sortProducts = (option) => {
        this.setState({isLoading: !this.state.isLoading})
        let tempArr = [...this.state.sortedProducts]

        tempArr = tempArr.sort((a, b) => {
            if (option.value === "priceLowest") {
                return a.price - b.price
            }
            if (option.value === "priceHeights") {
                return b.price - a.price
            }

        })
        setTimeout(() => {
            this.setState({isLoading: false})
            this.setState({sortedProducts: [...tempArr]})
        }, 1000)
    }

    //range sliders
    handleChange = (event) => {
        this.setState({tempMin: event[0]})
        this.setState({tempMax: event[1]})

    }
//range submit button
    handleSubmit = (event) => {
        this.setState({isLoading: true})
        setTimeout(() => {
            this.setState({maxPrice: this.state.tempMax})
            this.setState({minPrice: this.state.tempMin})
            this.setState({isLoading: false})
            this.filterProducts()
        }, 1000)

    }
    //for range sliders
    handle = (props) => {
        const {value, dragging, index, ...restProps} = props;

        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </Tooltip>
        );
    };

    render() {

        return (
            <ProductsContext.Provider value={{
                ...this.state,
                reset: this.reset,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handle: this.handle,
                //
                setFiltersBoost: this.setFiltersBoost,
                filterByTypeBoost: this.filterByTypeBoost,

                //
                sortProducts: this.sortProducts,
                setFilters: this.setFilters,
                screenFilter: this.screenFilter,
                filterProducts: this.filterProducts,
                isLoading: this.state.isLoading,
                //modal
                close: this.closeModal,
                open: this.openModal,
                addInCart: this.addInCart,
                tempMinPrice: tempMinPrice,
                tempMaxPrice: tempMaxPrice,
                modalOpen: this.state.modalOpen,
                //checkout
                addToCheckout: this.addToCheckout,
                removeFromCheckout: this.removeFromCheckout
                //поиск

            }}>
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}
