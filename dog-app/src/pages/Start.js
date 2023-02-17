import React from "react";
import Signout from "./Signout";
import Cookies from "universal-cookie";

const Start = () => {
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo");
  const isLoggedIn = userInfo !== undefined && userInfo != null;
  return (
    <>
      <Signout />
      <h1>Welcome back {userInfo.username}!</h1>
    </>
  );
};

export default Start;

