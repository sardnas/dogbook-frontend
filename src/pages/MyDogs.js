import { useState, useEffect } from "react";
import { GetFavorites } from "../Api";
import React from "react";
import Signout from "./Signout";
import Cookies from "universal-cookie";
import { DotLoader } from "react-spinners";
import DogTable from "../functions/DogTable";
import '../styles/Dogopedia.css';

const MyDogs = () => {
  const [shouldFetchBreeds, setShouldFetchBreeds] = useState(true);
  const [errorFetchingBreeds, setErrorFetchingBreeds] = useState(false);
  const [breeds, setBreeds] = useState(null);
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo", {
    path: "/",
    sameSite: "none",
    secure: true,
  });
  const token = userInfo.accessToken;

  useEffect(() => {
    async function FetchBreeds() {
      try {
        let response = await GetFavorites(token);

        if (response.status === 200) {
          let json = await response.json();

          setBreeds(json);
        } else if (response.status === 400) {
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

    if (shouldFetchBreeds) {
      setShouldFetchBreeds(false);
      FetchBreeds();
    }
  }, [shouldFetchBreeds, breeds]);

  console.log(errorFetchingBreeds);

  return (
    <>
      <Signout />
      <h1>My dogs</h1>
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
  return <div className="dogTablePage"><div className="horizontalSpacing"></div><DogTable data={[dogs, true]} /></div>;
}


export default MyDogs;
