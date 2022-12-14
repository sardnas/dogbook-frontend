import React, { useEffect, useState } from "react";
import Color from "../Constants";
import Box from "../Box.js";
import BigBox from "../BigBox.js";
import Text from "../Text.js";
import Input from "../Input.js";
import Spacing from "../Spacing";
import CenterScreen from "../CenterScreen";
import Button from "../Button.js";
import { Link, useHistory } from "react-router-dom";
import Post from "../Post";
import logo from "../BlackIcon.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Cookies from "universal-cookie";

const Start = () => {
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
          <Box color={Color.White}>
            <Spacing height={"50px"}></Spacing>
            <img src={logo} alt="Logo" height={"150px"} />
            <Spacing height={"1em"}></Spacing>
            <Text color={Color.DarkGrey}>{userInfo ? userInfo.name : ""}</Text>
            <Text fontSize={"1em"} color={Color.MediumGrey}>
              breed
            </Text>
          </Box>
          <Spacing width={"1em"}></Spacing>
          <Box color={Color.White} minWidth={"400px"} paddingTop={"50px"}>
            <Text color={Color.DarkGrey}>What's on your mind?</Text>
            <Spacing height={"1em"}></Spacing>
            <Input
              placeholder="Hello..."
              fontSize="15px"
              minWidth={"350px"}
              minHeight={"3em"}
            ></Input>
            <Popup
              trigger={
                <Button minWidth={"350px"} color={Color.Blue}>
                  Post message
                </Button>
              }
              position="right center"
            >
              <div>
                This functionality is under construction :( come back later!
              </div>
            </Popup>
            <Spacing height={"1em"}></Spacing>
            <Post minWidth={"343px"} minHeight={"3em"} fontSize="15px">
              <Text textAlign={"left"} color={Color.MediumGrey} fontSize="17px">
                doodle_dog, cocker spaniel
              </Text>
              Hej alla!! S??ker hundkompisar som vill leka
            </Post>
            <Spacing height={"1em"}></Spacing>
            <Post minWidth={"343px"} minHeight={"3em"} fontSize="15px">
              <Text textAlign={"left"} color={Color.MediumGrey} fontSize="17px">
                admindog, beagle
              </Text>
              V??lkommen till dogbook! Hoppas att du har en trevlig vistelse.
            </Post>
          </Box>
          <Spacing width={"1em"}></Spacing>
          <Box color={Color.White}>
            <Button minWidth={"243px"}>Start</Button>
            <Link to="/construction">
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
};

function Logout(cookies) {
  cookies.remove("userInfo", {
    path: "/",
    sameSite: "none",
    secure: true,
  });
  window.location.reload();
}

export default Start;
