import Heart from "react-heart"
import '../styles/HeartButton.css';
import { useEffect, useState } from "react";
import { PutFavorite, GetFavorites } from "../Api";
import Cookies from "universal-cookie";

function HeartButton(props) {
  const [active, setActive] = useState(false)
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo", {
    path: "/",
    sameSite: "none",
    secure: true,
  });
  const token = userInfo.accessToken;

  useEffect(() => {

    setActive(false);
  }, [props]);

  useEffect(() => {
    if (active) {
      PutFavorite(props.data.dog[9], token);
    }

  }, [active]);
  return (
    <div style={{
      width: "1.5rem", margin: "1.6rem",
    }}>
      <Heart isActive={active} onClick={() => setActive(!active)} animationScale={1.2} animationTrigger="both" animationDuration={.2} className={`customHeart${active ? " active" : ""}`} />
    </div >
  );
}

const MyFavoriteDogs = (token) => {
  const [shouldFetchBreeds, setShouldFetchBreeds] = useState(true);
  const [errorFetchingBreeds, setErrorFetchingBreeds] = useState(false);
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    async function FetchBreeds() {
      try {
        let response = await GetFavorites(token);

        if (response.status === 200) {
          let json = await response.json();

          setBreeds(json);
          console.log(json); // TODO: Fix bug with double dogs
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
    </>
  );
};

export default HeartButton;