import * as React from "react";
import Button from "../Button.js"
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';
import {Link} from 'react-router-dom';

function Home() {
  return ( <>
  <CenterScreen>
    <Box color = {Color.Blue}>
      <Spacing height = {"1em"}></Spacing>
      <Text>dogbook</Text>
      <Spacing height = {"1em"}></Spacing>
      </Box>
      <Spacing height = {"10px"}></Spacing>
    <Box>
    <Spacing height = {"1em"}></Spacing>
    <Text color = {Color.Yellow}>Enter your username: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input placeholder='Username...'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Text color = {Color.Blue}>Enter your password: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input type={"password"} placeholder='Password...'></Input>
      <Spacing height = {"1em"}></Spacing>
      <Button color = {Color.BlueGreen}>Log in</Button>
      <Link to = "/register">
        <Button>Register</Button>
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
