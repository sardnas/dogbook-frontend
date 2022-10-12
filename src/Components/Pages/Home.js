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
    <Box color = {Color.Blue}><Text>dogbook</Text></Box>
    <Box>
    <Spacing height = {"1em"}></Spacing>
      <Input placeholder='Username...'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Input type={"password"} placeholder='Password...'></Input>
      <Spacing height = {"1em"}></Spacing>
      <Button color = {Color.BlueGreen}>Log in</Button>
      <Link to = "/register">
        <Button>Register</Button>
      </Link>
    </Box>
    </CenterScreen>
    </>  );
}

export default Home;
