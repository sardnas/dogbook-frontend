import { useState, useEffect } from "react";
import { GetBreeds } from "../Api";
import '../styles/Dogopedia.css';
import DogTable from "../functions/DogTable";
import React from "react";
import Signout from "./Signout";

const Dogopedia = () => {
  const [shouldFetchBreeds, setShouldFetchBreeds] = useState(true); //true because it should fetch the breeds when the page loads
  const [errorFetchingBreeds, setErrorFetchingBreeds] = useState(false); //false because no error has occured when the page loads
  const [breeds, setBreeds] = useState(null); //null because there is no breeds data yet

  useEffect(() => {
    //this is a function that will call the api function for fetching breeds and handle the response
    async function FetchBreeds() {
      try {
        let response = await GetBreeds();

        //check if the response was a sucess, 200 means that it was
        if (response.status === 200) {
          let json = await response.json(); //we want to parse the response body as json if it was a sucess

          console.log(json); //don't publish code with this line! I just added it here to show that
          //it can be quite usefull to write the value of the json object to the console
          //you could try to write out the value of response too if there is something that is not working

          setBreeds(json); //save the data we have gotten
        } else if (response.status === 400) {
          //we can check for specific error codes like this
          alert(
            "400 means that the server thinks this request was invalid because of missing or invalid input"
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

    //it is important to remember to actually call the function declared above :weary:
    if (shouldFetchBreeds) {
      setShouldFetchBreeds(false);
      FetchBreeds();
    }
  }, [shouldFetchBreeds, breeds]); //this is a dependency array, it tells react what values it should watch for updates

  console.log(errorFetchingBreeds);

  const getHeadings = () => {
    return Object.keys(breeds[0]);
  }
  return (
    <>
      <Signout />
      <h1>Dogopedia</h1>

      {breeds ? ( //if breeds exist we want to display them
        <>
          <DogTablePage dogs={breeds} /></>
      ) : errorFetchingBreeds ? ( //if breeds don't exist we display a message based on if there has been an error or not
        <div>
          something went terribly, terribly wrong when fetching breeds 😞
        </div>
      ) : (
        <div>loading breeds... ✋🤠👉⌛</div>
      )}
    </>
  );
};

const DogTablePage = ({ dogs }) => {
  return <div className="dogTablePage"><div className="horizontalSpacing"></div><DogTable data={dogs} /></div>;
}

export default Dogopedia;
