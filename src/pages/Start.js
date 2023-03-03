import React from "react";
import Signout from "./Signout";
import Cookies from "universal-cookie";
import InterActiveDog from "./InterActiveDog";

import '../styles/start.css';

const Start = () => {
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo");
  const isLoggedIn = userInfo !== undefined && userInfo != null;
  return (
    <>
      <Signout />
      <h1>Welcome {userInfo.username}!</h1>
      <div className="dogBox">
        <div className="interactiveDogBox">
          <InterActiveDog></InterActiveDog>
        </div>
      </div>
    </>
  );
};

export default Start;

