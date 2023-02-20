import '../styles/DogTable.css';
import { useState, useEffect } from "react";
import React, { Component } from 'react';

class DogTable extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = ({
            message: "d"
        })
    }

    updateContent = (dogObject) => {
        this.setState({ message: dogObject.breed_name });
    }

    render() {
        return (
            <div className='dogOuterContainer'>
                <div className='dogTableColumn'>
                    <input className='dogTableSearchBar' id="search" type="text" placeholder='Search for dogi' />
                    <div className='verticalSpacing' />
                    {this.props.data.map(element => { return <div><div onClick={() => this.updateContent(element)} className='dogRow'>{element.breed_name}</div><div className='verticalSpacing' /></div> })}
                </div>
                <dogInfo />
                <div className='dogContainer'>
                    {this.state.message}
                </div>
            </div>
        );
    }
}

const DogRow = ({ dog }) => {
    return <div><div className='dogRow'>{dog.breed_name}</div><div className='verticalSpacing' /></div>;
}

const handleOnClick = (dog) => {
    dogInfo(dog);
}

const dogInfo = (dog) => {
    return <div>gghhhhhhhhhh</div>;
}

export default DogTable;