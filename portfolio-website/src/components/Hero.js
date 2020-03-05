import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #393e41;
  color: white;
  text-align: center;
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 10px;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 30px 0px 0px 0px;
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  margin: 0 0 50px 0;
  font-size: 2rem;
`;

const KeyText = styled.span`
  color: #d282a6;
`;

const Hero = () => {
  return (
    <HeaderContainer>
      <Contents>
        <Title>
          Hi, I'm <KeyText>Alice</KeyText>.
        </Title>
        <Subtitle>I'm a front-end web Developer.</Subtitle>
      </Contents>
    </HeaderContainer>
  );
};

export default Hero;
