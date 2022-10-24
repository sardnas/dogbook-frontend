import React, { useEffect, useState } from "react";
import Color from "../Constants";
import Box from "../Box.js";
import Text from "../Text.js";
import Input from "../Input.js";
import Spacing from "../Spacing";
import CenterScreen from "../CenterScreen";
import Button from "../Button.js";
import { Link, useHistory } from "react-router-dom";
import { GetBreeds, RegisterUser } from "../../Api.js";
import ListOfBreeds from "./ListOfBreeds";
import Cookies from "universal-cookie";

const Register = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [breed, setBreed] = useState(null);
  const [username, setUsername] = useState(null);

  const navigate = useHistory();
  const cookies = new Cookies();

  const [breeds, setBreeds] = useState(null);
  const [fetchingBreeds, setFetchingBreeds] = useState(false);
  const [hasFetchedBreeds, setHasFetchedBreeds] = useState(false);
  const [breedsSearchText, setBreedsSearchText] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    async function FetchBreeds() {
      setFetchingBreeds(true);
      let response = await GetBreeds();
      setFetchingBreeds(false);
      if (response.status === 200) {
        let json = await response.json();
        setBreed(json[0].id);
        setBreeds(json);
      }
      setHasFetchedBreeds(true);
    }

    if (!hasFetchedBreeds) {
      FetchBreeds();
    }
  }, [breeds, fetchingBreeds, hasFetchedBreeds]);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <>
      <CenterScreen>
        <Box
          color={Color.Red}
          paddingTop={"1.5em"}
          paddingBottom={"1.5em"}
          minWidth={"350px"}
        >
          <Text>New member</Text>
        </Box>
        <Spacing height={"1em"}></Spacing>
        <Box minWidth={"350px"}>
          <Spacing height={"1em"}></Spacing>
          <Text color={Color.Yellow}>Enter your email: </Text>
          <Spacing height={"5px"}></Spacing>
          <Input
            type="email"
            placeholder="example@dogbook.com"
            onChange={(event) => {
              if (isValidEmail(event.target.value)) {
                setEmail(event.target.value);
              }
            }}
          />
          <Spacing height={"15px"}></Spacing>
          <Text color={Color.BlueGreen}>Enter your username: </Text>
          <Spacing height={"5px"}></Spacing>
          <Input
            placeholder="HappyDog1"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Spacing height={"15px"}></Spacing>
          <Text color={Color.Blue}>Choose a password: </Text>
          <Spacing height={"5px"}></Spacing>
          <Input
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Spacing height={"1em"}></Spacing>
          <Text color={Color.Red}>Enter your dog's breed: </Text>
          <Spacing width={"1em"}></Spacing>
          {breeds ? (
            <ListOfBreeds
              breeds={breeds}
              breedSelected={(breedId) => {
                setBreed(breedId);
              }}
            ></ListOfBreeds>
          ) : null}
          <Spacing height={"1em"}></Spacing>
          <Button
            onClick={async () => {
              await HandleRegister(
                email,
                username,
                password,
                breed,
                cookies,
                navigate
              );
            }}
            minWidth={"299px"}
          >
            Let's go!
          </Button>
        </Box>
      </CenterScreen>
    </>
  );
};

async function HandleRegister(
  email,
  username,
  password,
  breed,
  cookies,
  navigate
) {
  if (!ValidInput(username, email, password)) {
    alert("Username, password or email is missing");
    return;
  }

  let response = await RegisterUser(email, password, breed, username);

  if (response.status === 400) {
    alert("Unvalid input");
  } else if (response.status !== 200) {
    alert("Unknown error");
  } else {
    cookies.set("userInfo", await response.json(), {
      path: "/",
      sameSite: "none",
      secure: true,
    });
    navigate.push("/start");
  }
}

function ValidInput(username, email, password) {
  if (!email) return false;
  if (!password) return false;
  if (!username) return false;

  return true;
}

export default Register;
