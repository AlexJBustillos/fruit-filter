import React, { Component }  from 'react';
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            fruitsToDisplay: this.props.fruits,
            filterValue: ''
        };
    }

    handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        const filterFruitList = this.props.fruits.filter(fruit => {
            // this is what we did in one line below!!!
            // if (fruit.toLowerCase() === filterValue.toLowerCase()) {
            //     return true;
            // }
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })

        this.setState({ fruitsToDisplay: filterFruitList, filterValue });
    }
    render() {
        // Inside of Input Component, to access props, I will say props.value
        // Inside of List Component, to access props, I will say props.fruits
        return(
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
    

}

export default FruitContainer;