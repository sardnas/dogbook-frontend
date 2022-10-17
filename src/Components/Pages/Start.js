import * as React from "react";
import Color from '../Constants';
import Box from "../Box.js"
import BigBox from "../BigBox.js"
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
        <BigBox>
        <Box color = {Color.White}>
            <Text color = {Color.DarkGrey}>Username</Text>
        </Box>
        <Spacing width = {"1em"}></Spacing>
        <Box color = {Color.White} min-width = {"400px"}>
            <Input placeholder='Hello...'></Input>
            <Button>Post message</Button>
        </Box>
        <Spacing width = {"1em"}></Spacing>
        <Box color = {Color.White}>
            <Button>Start</Button>
            <Button color = {Color.Red}>Profile</Button>
            <Button color = {Color.BlueGreen}>Users</Button>
            <Button>Breeds</Button>
            <Button color = {Color.Red}>Support</Button>
            <Button color = {Color.BlueGreen}>Log out</Button>
        </Box>
        </BigBox>
    </CenterScreen>
    </>  

    );
}

export default Start;