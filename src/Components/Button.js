import styled from "styled-components";
import {Color} from "./Constants";

const Button = styled.button`
  background-color: ${(props)=> props.color ? props.color : Color.Yellow};
  font-size: 1.3em;
  font-weight: bold;
  margin: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: ${(props)=> props.minWidth ? props.minWidth : "200px"};
  max-width: ${(props)=> props.maxWidth ? props.maxWidth : "287px"};
  border-radius: 12px;
  border: none;
  color: ${Color.White};
  font-family: "Jost";
  
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

  &:hover {
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -o-transform: scale(1.05);
      transform: scale(1.05);
      transition-duration: 0.05s;
    }
`;


export default Button;
