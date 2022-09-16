import styled from "styled-components";
import {Color} from "./Constants";

const Button = styled.button`
  background-color: ${Color.Green};
  font-size: 1em;
  margin: 1em;
  padding-top: 30px;
  padding-bottom: 30px;
  min-width: 287px;
  border-radius: 12px;
  border: none;
  color: ${Color.White};
  font-family: "Jost";
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`;

export default Button;
