import React from "react";
import styled from "styled-components";

import profileImg from "../images/profile.png";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  color: white;
  text-align: center;
  margin-bottom: 200px;
  padding-top: 80px;
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 10px 110px 10px;
`;

const Title = styled.h1`
  margin: 30px 0px 0px 0px;
  font-size: 3.5rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 6rem;
  }
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  margin: 0 0 50px 0;
  font-size: 1.2rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 2rem;
  }
`;

const KeyText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const ImageRing = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 280px;
  left: 0;
  right: 0;
  ${({ theme }) => theme.breakpoints.medium} {
    top: 345px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index: 10;
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
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
      <ImageRing>
        <ProfileImage src={profileImg} />
      </ImageRing>
    </HeaderContainer>
  );
};

export default Hero;
