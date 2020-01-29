import React, {Component} from 'react';
import mainData from "../data";


const FiltersContext = React.createContext();
const FiltersConsumer = FiltersContext.Consumer;

export {FiltersProvider, FiltersContext, FiltersConsumer}

class FiltersProvider extends Component {
    state = {
        //sortedProducts: [...mainData],
        testString: 'somesttring',
        items: []
    }
    test = () => {
        console.log("test")
    }
    setFiltersBoost = (event) => {
        let item = event.target.value.value;
        let type = event.target.value.type;
console.log('setFiltersBoost')
        if (type === "credit"|| type === "discount") {
            this.filterByTypeBoost(type)
        }

    }
    filterByTypeBoost = (type) => {
        console.log('filterByTypeBoost')
        let items = [...mainData]
        items = items.filter(element => element[type])
        this.setState({[type]: [...items]})
    }

    render() {
        return (
            <FiltersContext.Provider value={{
                ...this.state,
                test: this.test,
                //поиск

            }}>
                {this.props.children}
            </FiltersContext.Provider>
        );
    }
}

export default FiltersContext;