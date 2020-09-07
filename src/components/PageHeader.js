import React from "react";
import styled from "styled-components";
import { Contents } from "./Contents";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  color: white;
  text-align: center;
  margin-bottom: 80px;
  padding-top: 110px;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 10px 0px 60px 0px;
`;

const KeyText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const PageHeader = ({ children }) => (
  <HeaderContainer>
    <Contents>
      <Title>
        <KeyText>{children}</KeyText>.
      </Title>
    </Contents>
  </HeaderContainer>
);

export default PageHeader;
