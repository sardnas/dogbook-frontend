import * as React from "react";
import Button from "../Button.js"
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';
import {Link} from 'react-router-dom';
import logo from '../WhiteIcon.svg';
import BigBox from "../BigBox.js"

function Home() {
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
      <Input placeholder='Username...'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Text color = {Color.Blue}>Enter your password: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input type={"password"} placeholder='Password...'></Input>
      <Spacing height = {"1em"}></Spacing>
      <Link to = "/start">
        <Button color = {Color.BlueGreen} minWidth = {"299px"}>Log in</Button>
      </Link>
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

export default Home;
