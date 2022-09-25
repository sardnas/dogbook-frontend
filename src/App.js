import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button.js"
import Color from './Components/Constants';
import Box from "./Components/Box.js"
import Text from "./Components/Text.js"
import Input from "./Components/Input.js"
import Spacing from './Components/Spacing';

function App() {
  return ( <>
    <Box color = {Color.Blue}><Text>dogbook</Text></Box>
    <Box>
    <Spacing height = {"1em"}></Spacing>
      <Input placeholder='Username...'></Input>
      <Spacing height = {"15px"}></Spacing>
      <Input placeholder='Password...'></Input>
      <Spacing height = {"1em"}></Spacing>
      <Button color = {Color.BlueGreen}>Log in</Button>
      <Button>Register</Button>
    </Box>
    </>  );
}

export default App;
