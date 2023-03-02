import Heart from "react-heart"
import '../styles/HeartButton.css';
import { useEffect, useState } from "react";
import { PutFavorite, GetFavorites, RemoveFavorite } from "../Api";
import Cookies from "universal-cookie";

function HeartButton(props) {
  const [active, setActive] = useState(false)
  const [favBreeds, setFavBreeds] = useState(null);
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

          setFavBreeds(json);
        } else if (response.status === 400) {
          alert(
            "400 means that the server thinks this request was invalid because of missing or invalid input"
          );
        } else {
          alert("An unknown error occured");
        }
      } catch (e) {
        console.error("There was an error when fetching the breeds! :-(");
        console.error(e);
      }
    }

    FetchBreeds();
    setActive(false);
    if (favBreeds) {
      favBreeds.forEach((element) => {
        if (props.data[9] == element.breed_id) {
          setActive(true);
        }
      });
    }

  }, [props]);

  const handleOnClick = () => {
    setActive(!active);
    if (!active) {
      PutFavorite(props.data[9], token);
    } else {
      RemoveFavorite(props.data[9], token);
    }

  }

  return (
    <div style={{
      width: "1.5rem", margin: "1.6rem",
    }}>
      <Heart isActive={active} onClick={() => handleOnClick()} animationScale={1.2} animationTrigger="both" animationDuration={.2} className={`customHeart${active ? " active" : ""}`} />
    </div >
  );
}

export default HeartButton;