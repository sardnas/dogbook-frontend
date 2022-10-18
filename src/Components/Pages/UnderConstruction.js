import * as React from "react";
import Button from "../Button.js"
import Color from '../Constants';
import Box from "../Box.js"
import Text from "../Text.js"
import Input from "../Input.js"
import Spacing from '../Spacing';
import CenterScreen from '../CenterScreen';
import {Link} from 'react-router-dom';

function UnderConstruction() {
  return ( <>
  <CenterScreen>
    <Text color = {Color.DarkGrey}>This page is currently under construction.</Text>
    <Text color = {Color.DarkGrey}>Come back later!</Text>
      <Link to = "/start">
        <Button>Go back to start</Button>
      </Link>
    </CenterScreen>
    </>  );
}

export default UnderConstruction;
