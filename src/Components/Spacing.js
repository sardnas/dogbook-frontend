import styled from "styled-components";

const Spacing = styled.div`
  width: ${(props) => (props.width ? props.width : "0px")};
  height: ${(props) => (props.height ? props.height : "0px")};
`;

export default Spacing;