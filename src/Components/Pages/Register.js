import * as React from "react";
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';

const Register = () => {
    return(
        <>
  <CenterScreen>
    <Box color = {Color.Blue}><Text>dogbook</Text></Box>
    <Box>
    <Spacing height = {"1em"}></Spacing>
      <Input placeholder='Username...'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Input type={"password"} placeholder='Password...'></Input>
    </Box>
    </CenterScreen>
    </>  

    );
}

export default Register;