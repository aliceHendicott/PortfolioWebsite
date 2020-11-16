import React from "react";
import styled from "styled-components";

const ContentsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 3rem 0;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
`;

const Date = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const Description = styled.p`
  margin: 0.5rem;
  text-align: center;
`;

const TimelineItem = ({ title, dateRange, logo, children }) => (
  <ContentsContainer>
    <Logo src={logo} />
    <Title>{title}</Title>
    <Date>{dateRange}</Date>
    <Description>{children}</Description>
  </ContentsContainer>
);

export { TimelineItem };
