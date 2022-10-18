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
import Post from "../Post";
import logo from '../BlackIcon.svg';

const Start = () => {
    return(
        <>
        <CenterScreen>
        <BigBox>
        <Box color = {Color.White}>
            <Spacing height = {"50px"}></Spacing>
            <img src={logo} alt="Logo" height = {"150px"}/>
            <Spacing height = {"1em"}></Spacing>
            <Text color = {Color.DarkGrey}>Username</Text>
        </Box>
        <Spacing width = {"1em"}></Spacing>
        <Box color = {Color.White} minWidth = {"400px"} paddingTop = {"50px"}>
            <Text color = {Color.DarkGrey}>What's on your mind?</Text>
            <Spacing height = {"1em"}></Spacing>
            <Input placeholder='Hello...' fontSize = '15px' minWidth = {"350px"} minHeight = {"3em"}></Input>
            <Button minWidth = {"350px"} color = {Color.Blue}>Post message</Button>
            <Spacing height = {"1em"}></Spacing>
            <Post minWidth = {"343px"} minHeight = {"3em"} fontSize = '15px'>
                <Text textAlign = {"left"} color = {Color.MediumGrey} fontSize = '17px'>Username</Text>
                Hej alla! Idag var det fint väder.</Post>
        </Box>
        <Spacing width = {"1em"}></Spacing>
        <Box color = {Color.White}>
            <Button minWidth = {"243px"}>Start</Button>
            <Link to = "/construction">
                <Button color = {Color.Red} minWidth = {"243px"}>Profile</Button>
            </Link>
            <Link to = "/construction">
                <Button color = {Color.BlueGreen} minWidth = {"243px"}>Users</Button>
            </Link>
            <Link to = "/construction">
                <Button minWidth = {"243px"}>Breeds</Button>
            </Link>
            <Link to = "/construction">
                <Button color = {Color.Red} minWidth = {"243px"}>Support</Button>
            </Link>
            <Link to = "/">
                <Button color = {Color.BlueGreen} minWidth = {"243px"}>Log out</Button>
            </Link>
        </Box>
        </BigBox>
    </CenterScreen>
    </>  

    );
}

export default Start;