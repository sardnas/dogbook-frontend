import '../styles/DogTable.css';
import { useState, useEffect } from "react";
import React, { Component } from 'react';
import DogStats from '../pages/DogStats';

class DogTable extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        if (props.data[0]) {
            console.log("inside if");
            this.state = ({
                currentDog: [this.props.data[0].breed_name,
                this.props.data[0].height_low_inches,
                this.props.data[0].height_high_inches,
                this.props.data[0].weight_low_lbs,
                this.props.data[0].weight_high_lbs,
                this.props.data[0].breed_classification,
                this.props.data[0].breed_obey,
                this.props.data[0].reps_lower,
                this.props.data[0].reps_upper,
                this.props.data[0].breed_id]
            })
        } else {
            this.state = (
                { currentDog: [] }
            )
        }

    }

    updateContent = (dogObject) => {
        this.setState({
            currentDog: [dogObject.breed_name,
            dogObject.height_low_inches,
            dogObject.height_high_inches,
            dogObject.weight_low_lbs,
            dogObject.weight_high_lbs,
            dogObject.breed_classification,
            dogObject.breed_obey,
            dogObject.reps_lower,
            dogObject.reps_upper,
            dogObject.breed_id]
        });
    }

    render() {
        return (
            <div className='dogOuterContainer'>
                <div className='dogTableColumn'>
                    <input className='dogTableSearchBar' id="search" type="text" placeholder='Search for dog (under construction)' />
                    <div className='verticalSpacing' />
                    {this.props.data.map(element => { return <div><div onClick={() => this.updateContent(element)} className='dogRow'>{element.breed_name}</div><div className='verticalSpacing' /></div> })}
                </div>
                <div className='dogContainer'>
                    <DogStats dog={this.state.currentDog}></DogStats>
                </div>
            </div>
        );
    }
}

export default DogTable;