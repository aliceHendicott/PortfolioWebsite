import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.5rem 0px;
  border-radius: 10px;
`;

const Box = ({ className, children }) => (
  <Container className={className}>{children}</Container>
);

export default Box;
