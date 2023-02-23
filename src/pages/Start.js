import React from "react";
import Signout from "./Signout";
import Cookies from "universal-cookie";
import InterActiveCubes from "./InterActiveCubes";

const Start = () => {
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo");
  const isLoggedIn = userInfo !== undefined && userInfo != null;
  return (
    <>
      <Signout />
      <h1>Welcome {userInfo.username}!</h1>
      <InterActiveCubes></InterActiveCubes>
    </>
  );
};

export default Start;

