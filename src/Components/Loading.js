import React, { useEffect, useState } from "react";
import { Color } from "./Constants";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const StyledLoading = styled.div`
  margin-left: 150px;
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "200px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "287px")};
  border-radius: 12px;
  border: none;
`;

const Loading = () => {
  return (
    <>
      <StyledLoading>
        <PropagateLoader color={Color.LightGrey} />
      </StyledLoading>
    </>
  );
};

export default Loading;
