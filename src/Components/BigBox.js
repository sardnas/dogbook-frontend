import styled from "styled-components";
import {Color} from "./Constants";

const BigBox = styled.div`
  background-color: ${(props)=> props.color ? props.color : Color.LightGrey};
  font-size: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: ${(props)=> props.minWidth ? props.minWidth : "287px"};
  max-width: ${(props)=> props.maxWidth ? props.maxWidth : "450px"};
  border-radius: 12px;
  border: none;
  color: ${Color.White};
  font-family: "Jost";
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default BigBox;
