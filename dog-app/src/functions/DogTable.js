import '../styles/DogTable.css';
import { useState, useEffect } from "react";
import React from "react";

function DogTable({ data }) {
    console.log('DogTable: ');
    console.log(data[0].breed_name);

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
    // TODO: Ta bort thead sen när jag listat ut hur man bara visar första kolumnen
    return (
        <div className='dogTableColumn'>
            <input className='dogTableSearchBar' id="search" type="text" placeholder='Search for dogi' />
            <div className='verticalSpacing' />
            {data.map(element => { return <DogRow dog={element} /> })}
            {/* <table className="table">
        <thead>
            <tr>
                {theadData.map(heading => {
                return <th className="th" key={heading}>{heading}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {tbodyData.map((row, index) => {
            return <tr onClick={() => handleOnClick(row)} className='tr' key={index}>
                {theadData.map((key, index) => {
                return <td className="td" key={row[key]}>{row[key]}</td>
                })}
            </tr>;
            })}
        </tbody>
        </table>*/}
        </div>
    );
}

const DogRow = ({ dog }) => {
    return <div><div className='dogRow'>{dog.breed_name}</div><div className='verticalSpacing' /></div>;
}

export default DogTable;