import React from "react";
import styled from "styled-components";

import profileImg from "../images/profile.png";

const HeaderContainer = styled.div`
  background-color: #393e41;
  color: white;
  text-align: center;
  margin-bottom: 230px;
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 10px 180px 10px;
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

const ImageRing = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 5px solid #d282a6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 330px;
  left: 0;
  right: 0;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: 10;
  border: 3px solid #f5cee0;
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
