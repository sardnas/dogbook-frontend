import React, { useEffect, useState } from "react";
import Button from "../Button.js";
import Color from "../Constants";
import Box from "../Box.js";
import Text from "../Text.js";
import Input from "../Input.js";
import Spacing from "../Spacing";
import CenterScreen from "../CenterScreen";
import { Link, useHistory } from "react-router-dom";
import logo from "../BlackIcon.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Cookies from "universal-cookie";
import BigBox from "../BigBox.js";

function Profile() {
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo");
  const isLoggedIn = userInfo !== undefined && userInfo != null;
  const navigate = useHistory();

  let userRole = 0;
  if (isLoggedIn) {
    userRole = userInfo.role;
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate.push("/"); //todo make it not possible to post
    }
  }, [navigate, isLoggedIn]);
  return (
    <>
      <CenterScreen>
        <BigBox>
          <Box
            minWidth={"400px"}
            paddingTop={"50px"}
            paddingLeft={"2em"}
            paddingRight={"2em"}
          >
            <Text color={Color.Red}>
              Welcome to {userInfo ? userInfo.name : ""}'s page!
            </Text>
            <Spacing height={"1.5em"}></Spacing>
            <Text fontSize={"1em"} color={Color.DarkGrey}>
              I'm a dog of the breed _. You can learn more about my breed under
              the page "Breeds" in the menu!
            </Text>
            <Spacing height={"10em"}></Spacing>
            <Popup
              trigger={
                <Button minWidth={"350px"} color={Color.Blue}>
                  Edit profile
                </Button>
              }
              position="right center"
            >
              <div>
                This functionality is under construction :( come back later!
              </div>
            </Popup>
          </Box>
          <Box color={Color.White}>
            <Button minWidth={"243px"}>Start</Button>
            <Link to="/profile">
              <Button color={Color.Red} minWidth={"243px"}>
                Profile
              </Button>
            </Link>
            <Link to="/construction">
              <Button color={Color.BlueGreen} minWidth={"243px"}>
                Users
              </Button>
            </Link>
            <Link to="/construction">
              <Button minWidth={"243px"}>Breeds</Button>
            </Link>
            <Link to="/construction">
              <Button color={Color.Red} minWidth={"243px"}>
                Support
              </Button>
            </Link>
            <Link to="/">
              <Button
                color={Color.BlueGreen}
                minWidth={"243px"}
                onClick={() => {
                  Logout(cookies);
                }}
              >
                Log out{" "}
              </Button>
            </Link>
          </Box>
        </BigBox>
      </CenterScreen>
    </>
  );
}

function Logout(cookies) {
  cookies.remove("userInfo", {
    path: "/",
    sameSite: "none",
    secure: true,
  });
  window.location.reload();
}

export default Profile;
