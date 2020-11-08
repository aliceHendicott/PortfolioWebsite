import React from "react";
import styled from "styled-components";
import { Contents } from "./Contents";

const HeaderContainer = styled.div`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primary}, ${theme.colors.background01})`};
  color: white;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PageHeader = ({ children }) => (
  <HeaderContainer>
    <Contents>
      <Title>{children}.</Title>
    </Contents>
  </HeaderContainer>
);

export default PageHeader;
