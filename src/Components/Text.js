import styled from "styled-components";
import {Color} from "./Constants";

const Text = styled.text`
  font-size: ${(props)=> props.fontSize ? props.fontSize : "1.3em"};
  font-weight: bold;
  border: none;
  color: ${(props)=> props.color ? props.color : Color.White};
  font-family: "Jost";
  text-align: center;
`;

export default Text;
