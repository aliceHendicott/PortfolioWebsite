import React from "react";
import styled from "styled-components";

import profileImg from "../../images/profile.png";

const HeaderContainer = styled.div`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primary}, ${theme.colors.background01})`};
  color: white;
  height: 100vh;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 100px 0;
  ${({ theme }) => theme.breakpoints.large} {
    flex-direction: row;
    max-width: 1020px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    height: 100%;
  }
`;

const Heading = styled.div`
  text-align: center;

  ${({ theme }) => theme.breakpoints.large} {
    text-align: left;
  }
`;

const Title = styled.h1`
  margin: 50px 0px 0px 0px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3.5rem;

  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 5rem;
  }
`;

const Subtitle = styled.p`
  margin: 0 0 50px 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 3rem;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  ${({ theme }) => theme.breakpoints.large} {
    width: 400px;
    height: 400px;
  }
`;

const Hero = () => {
  return (
    <HeaderContainer>
      <Contents>
        <ProfileImage src={profileImg} />
        <Heading>
          <Title>Hi, I'm Alice.</Title>
          <Subtitle>a web developer.</Subtitle>
        </Heading>
      </Contents>
    </HeaderContainer>
  );
};

export default Hero;
