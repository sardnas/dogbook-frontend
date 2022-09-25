import styled from "styled-components";
import {Color} from "./Constants";

const Input = styled.input`
  background-color: ${(props)=> props.color ? props.color : Color.LightGrey};
  font-size: 1.3em;
  font-weight: bold;
  margin: 0em;
  margin-left: 1em;
  margin-right: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;
  min-width: 287px;
  border-radius: 12px;
  border: none;
  color: ${Color.DarkGrey};
  font-family: "Jost";
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`;

export default Input;
