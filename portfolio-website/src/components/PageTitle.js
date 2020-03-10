import React from "react";
import styled from "styled-components";

const PageHeading = styled.h1`
  font-size: 4rem;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 10px;
    background-color: #d282a6;
  }
`;

const PageTitle = ({ children }) => {
  return <PageHeading>{children}</PageHeading>;
};

export { PageTitle };
