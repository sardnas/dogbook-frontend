import styled from "styled-components";
import { Color } from "./Constants";

const StyledSelect = styled.select`
  background-color: ${(props) => (props.color ? props.color : Color.LightGrey)};
  font-size: 1.3em;
  font-weight: bold;
  margin: 1em;
  padding-left: 5px;
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "200px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "287px")};
  border-radius: 12px;
  border: none;
  color: ${Color.DarkGrey};
  font-family: "Jost";
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export default StyledSelect;
