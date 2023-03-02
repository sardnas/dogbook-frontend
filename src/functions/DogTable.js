import '../styles/DogTable.css';
import React, { Component } from 'react';
import DogStats from '../pages/DogStats';
import { SearchDogopedia } from "../Api";

class DogTable extends Component {
    constructor(props) {
        super(props);
        if (props.data[0][0]) {
            this.state = ({
                currentDog: [this.props.data[0][0].breed_name,
                this.props.data[0][0].height_low_inches,
                this.props.data[0][0].height_high_inches,
                this.props.data[0][0].weight_low_lbs,
                this.props.data[0][0].weight_high_lbs,
                this.props.data[0][0].breed_classification,
                this.props.data[0][0].breed_obey,
                this.props.data[0][0].reps_lower,
                this.props.data[0][0].reps_upper,
                this.props.data[0][0].breed_id],
                searchFilter: "",
                searchResult: [],
                myDogs: props.data[1]
            })
        } else {
            this.state = (
                {
                    currentDog: [],
                    searchFilter: "",
                    searchResult: [],
                    myDogs: []
                }
            )
        }
        this.onSearch = this.onSearch.bind(this);

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
            dogObject.breed_id],
        });
    }
    handleOnChange = (event) => {
        if (event.target.value) {
            this.setState({ searchFilter: event.target.value });
        } else {
            this.setState({ searchFilter: "" });
            this.search = false;
        }
    }

    onSearch = () => {
        if (this.state.searchFilter.length != 0 && !this.state.myDogs) {
            const searchString = this.state.searchFilter;
            let searchRes = [];
            async function SearchDog() {
                try {
                    let response = await SearchDogopedia(searchString);
                    //check if the response was a sucess, 200 means that it was
                    if (response.status === 200) {
                        let json = await response.json();
                        searchRes = json;
                    } else if (response.status === 400) {
                        console.error("Error: 400");
                        searchRes = [];
                    } else {
                        console.error("There was an unknown error");
                        searchRes = [];
                    }
                } catch (e) {
                    console.error("There was an error");
                    console.error(e);
                    searchRes = [];
                }
                return searchRes;
            }
            this.search = true;
            SearchDog().then((val) => this.setState({ searchResult: val }));
        } else {
            this.search = false;
        }
    }


    render() {
        return (
            <>
                <div className='horizontallyCenter'>
                    <div className='dogOuterContainer'>
                        <div className='dogTableColumn'>
                            <input value={this.state.searchFilter} onChange={this.handleOnChange} onKeyUp={this.onSearch} className='dogTableSearchBar' id="search" type="text" placeholder='Search for dog' />
                            <div className='verticalSpacing' />
                            {!this.search ? (
                                <>{this.props.data[0].map(element => { return <div><div onClick={() => this.updateContent(element)} className='dogRow'>{element.breed_name}</div><div className='verticalSpacing' /></div> })}</>
                            ) : (
                                <>{this.state.searchResult.map(element => { return <div><div onClick={() => this.updateContent(element)} className='dogRow'>{element.breed_name}</div><div className='verticalSpacing' /></div> })}</>
                            )}
                        </div>
                        <div className='dogContainer'>
                            <DogStats data={this.state.currentDog}></DogStats>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DogTable;