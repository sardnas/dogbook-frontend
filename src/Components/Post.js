import styled from "styled-components";
import {Color} from "./Constants";

const Post = styled.text`
  background-color: ${(props)=> props.color ? props.color : Color.LightGrey};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.3em")};
  font-weight: bold;
  margin: 0em;
  margin-left: 1em;
  margin-right: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;
  min-width: ${(props)=> props.minWidth ? props.minWidth : "200px"};
  max-width: ${(props)=> props.maxWidth ? props.maxWidth : "287px"};
  min-height: ${(props)=> props.minHeight ? props.minHeight : "1em"};
  border-radius: 12px;
  border: none;
  color: ${Color.DarkGrey};
  font-family: "Jost";
  display: flex;
  flex-direction: column;
  justify-content: left;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.25);
`;

export default Post;
