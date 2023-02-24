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
  /* fix this
    async function FetchFavorites() {
      let response = await GetFavorites(token);
      console.log(response);
    }
    FetchFavorites()
  */
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

export default HeartButton;

/* CSS
.customHeart:hover {
  fill: #c9c7c7 !important;
  transition: fill 0.1s;
}
.customHeart:active {
  fill: #a5a5a5 !important;
  transition: fill 0.1s;
}
.active.customHeart:hover {
  fill: rgb(205, 3, 3) !important;
  transition: fill 0.1s;
}
.active.customHeart:active {
  fill: rgb(155, 6, 6) !important;
  transition: fill 0.1s;
}
*/