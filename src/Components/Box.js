import styled from "styled-components";
import {Color} from "./Constants";

const Box = styled.div`
  background-color: ${(props)=> props.color ? props.color : Color.White};
  font-size: 1em;
  padding-top: ${(props)=> props.paddingTop ? props.paddingTop : "12px"};
  padding-bottom: 12px;
  min-width: ${(props)=> props.minWidth ? props.minWidth : "287px"};
  max-width: ${(props)=> props.maxWidth ? props.maxWidth : "450px"};
  border-radius: 12px;
  border: none;
  margin-right: 1em;
  margin-left: 1em;
  color: ${Color.White};
  font-family: "Jost";
  display: flex;
  flex-direction: column;
  justify-content: top;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`;

export default Box;
