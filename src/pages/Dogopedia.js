import { useState, useEffect } from "react";
import { GetBreeds } from "../Api";
import '../styles/Dogopedia.css';
import DogTable from "../functions/DogTable";
import React from "react";
import Signout from "./Signout";
import { DotLoader } from "react-spinners";

const Dogopedia = () => {
  const [shouldFetchBreeds, setShouldFetchBreeds] = useState(true);
  const [errorFetchingBreeds, setErrorFetchingBreeds] = useState(false);
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    async function FetchBreeds() {
      try {
        let response = await GetBreeds();

        if (response.status === 200) {
          let json = await response.json();
          setBreeds(json);
        } else if (response.status === 400) {
          alert(
            "400 invalid input"
          );
          setErrorFetchingBreeds(true); //set error value
        } else {
          alert("An unknown error occured");
          setErrorFetchingBreeds(true); //set error value
        }
      } catch (e) {
        console.error("There was an error when fetching the breeds! :-(");
        console.error(e);
        setErrorFetchingBreeds(true); //set error value
      }
    }

    if (shouldFetchBreeds) {
      setShouldFetchBreeds(false);
      FetchBreeds();
    }
  }, [shouldFetchBreeds, breeds]);

  console.log(errorFetchingBreeds);

  return (
    <>
      <Signout />
      <h1>Dogopedia</h1>

      {breeds ? ( //if breeds exist we want to display them
        <>
          <DogTablePage dogs={breeds} /></>
      ) : errorFetchingBreeds ? (
        <div>
          something went terribly, terribly wrong when fetching breeds 😞
        </div>
      ) : (
        <DotLoader color="#c9c7c7" />
      )}
    </>
  );
};

const DogTablePage = ({ dogs }) => {
  //console.log("dogs");
  //console.log(JSON.stringify(dogs));
  const myDogs = false;
  return <div className="dogTablePage"><div className="horizontalSpacing"></div><DogTable data={[dogs, myDogs]} /></div>;
}

export default Dogopedia;
