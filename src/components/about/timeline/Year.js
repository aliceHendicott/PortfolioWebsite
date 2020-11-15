import React from "react";
import styled from "styled-components";

const YearContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  padding: 20px;
  margin-top: 7rem;
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: calc(50% - 6px);
  }

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: calc(50% - 6px);
  }
`;

const YearText = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
`;

const Year = ({ year }) => (
  <YearContainer>
    <YearText>{year}</YearText>
  </YearContainer>
);

export { Year };
