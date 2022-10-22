import React, { useEffect, useState } from "react";
import Button from "../Button.js"
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';
import {Link, useHistory} from 'react-router-dom';
import logo from '../WhiteIcon.svg';
import BigBox from "../BigBox.js"
import { Login } from "../../Api.js";
import Cookies from "universal-cookie";

function Home() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginButton, setLoginButton] = useState(null);

  const cookies = new Cookies();
  const navigate = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoginButton(document.getElementById("loginButton"));
  }, []);
  
  return ( <>
  <CenterScreen>
    <BigBox color = {Color.Blue} minWidth = {"350px"}>
      <img src={logo} alt="Logo" height = {"75px"}/>
      <Spacing width = {"1em"}></Spacing>
      <Spacing height = {"1em"}></Spacing>
      <Text fontSize = {"3em"}>dogbook</Text>
      <Spacing height = {"1em"}></Spacing>
      </BigBox>
      <Spacing height = {"10px"}></Spacing>
    <Box minWidth = {"350px"} content = {"left"}>
    <Spacing height = {"1em"}></Spacing>
    <Text color = {Color.Yellow}>Enter your username: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input onChange={(event) => {
          setUsername(event.target.value);
        }} placeholder='Username...'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Text color = {Color.Blue}>Enter your password: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input onChange={(event) => {
          setPassword(event.target.value);
        }} type={"password"} placeholder='Password...'></Input>
      <Spacing height = {"1em"}></Spacing>
      <Button onClick={() => {HandleLogin(username, password, cookies, navigate);}} color = {Color.BlueGreen} minWidth = {"299px"}>Log in</Button>
      <Link to = "/register">
        <Button minWidth = {"299px"}>Register</Button>
      </Link>
    </Box>
    <Spacing height = {"10px"}></Spacing>
    <Link to = "/start">
        <Text color = {Color.Blue}>Log in as guest!</Text>
      </Link>
    </CenterScreen>
    </>  );
}

async function HandleLogin(username, password, cookies, navigate){
  let response = await Login(username, password);

  if(response.status === 200){
    cookies.set("userInfo", await response.json(), {
      path: "/",
      sameSite: "none",
      secure: true,
    });
    navigate.push("/start");
  }
  else if(response.status === 401){
    alert("Wrong password or username!");
  }else{
    alert("Unknown error!");
  }
}

export default Home;
