import * as React from "react";
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';
import Button from "../Button.js"
import {Link} from 'react-router-dom';

const Register = () => {
    return(
        <>
  <CenterScreen>
    <Box color = {Color.Red} paddingTop = {"1.5em"} paddingBottom = {"1.5em"} minWidth = {"350px"}>
      <Text>New member</Text>
    </Box>
    <Spacing height = {"1em"}></Spacing>
    <Box minWidth = {"350px"}>
    <Spacing height = {"1em"}></Spacing>
    <Text color = {Color.Yellow}>Enter your email: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input type = "email" placeholder='example@dogbook.com'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Text color = {Color.BlueGreen}>Enter your username: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input placeholder='HappyDog1'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Text color = {Color.Blue}>Choose a password: </Text>
      <Spacing height = {"5px"}></Spacing>
      <Input type ="password" placeholder='Password...'></Input>
      <Spacing height = {"1em"}></Spacing>
      <Text color = {Color.Red}>Enter your dog's breed: </Text>
      <Input type = "search" placeholder = "Scroll"></Input>
      <Spacing height = {"1em"}></Spacing>
      <Link to = "/register">
        <Button minWidth = {"299px"}>Let's go!</Button>
      </Link>
    </Box>
    </CenterScreen>
    </>  

    );
}

export default Register;