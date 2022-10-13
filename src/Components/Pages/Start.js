import * as React from "react";
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';
import Button from "../Button.js"
import {Link} from 'react-router-dom';

const Start = () => {
    return(
        <>
  <CenterScreen>
    <Box color = {Color.White}><Text color = {Color.DarkGrey}>Username</Text></Box>
    <Box color = {Color.White}><Text color = {Color.DarkGrey}>Feed</Text></Box>
    <Box color = {Color.White}><Text color = {Color.DarkGrey}>Menu</Text></Box>
    </CenterScreen>
    </>  

    );
}

export default Start;