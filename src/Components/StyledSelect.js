import styled from "styled-components";
import { Color } from "./Constants";

const StyledSelect = styled.select`
  background-color: ${(props) => (props.color ? props.color : Color.LightGrey)};
  font-size: 1.3em;
  font-weight: bold;
  margin: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "200px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "287px")};
  border-radius: 12px;
  border: none;
  color: ${Color.White};
  font-family: "Jost";
`;

export default StyledSelect;
