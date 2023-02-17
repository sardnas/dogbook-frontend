import '../styles/DogTable.css';
import { useState, useEffect } from "react";
import React from "react";

function DogTable({ data }) {
    //console.log('DogTable: ');
    //console.log(data[0].breed_name);

    /*
    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
    https://www.robinwieruch.de/react-table-search/
*/
    const handleOnClick = (dog) => {
        console.log(dog);
    }

    return (
        <div className='dogOuterContainer'>
            <div className='dogTableColumn'>
                <input className='dogTableSearchBar' id="search" type="text" placeholder='Search for dogi' />
                <div className='verticalSpacing' />
                {data.map(element => { return <DogRow dog={element} /> })}
            </div>
            <div className='dogContainer'>

            </div>
        </div>
    );
}

const DogRow = ({ dog }) => {
    return <div><div className='dogRow'>{dog.breed_name}</div><div className='verticalSpacing' /></div>;
}

export default DogTable;