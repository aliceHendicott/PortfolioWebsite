import React from "react";
import styled from "styled-components";

import Hero from "../components/Hero";
import { Contents } from "../components/Contents";
import { PageTitle } from "../components/PageTitle";
import { NavLink } from "react-router-dom";

import { AboutIcon } from "../components/AboutIcon";

import Box from "../components/Box";

const HeaderSmallerMargin = styled(PageTitle)`
  margin-top: 0rem;
`;

const BoxMenuContainer = styled.div`
  margin: 9rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const SvgContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuBox = styled(Box)`
  padding: 30px;
`;

const MenuBoxTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: normal;
`;

const MenuBoxSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const ContentsContainer = styled.div`
  margin-top: 30px;
`;

const MenuBoxLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const Home = () => {
  return (
    <>
      <Hero />
      <Contents>
        <HeaderSmallerMargin>About Me</HeaderSmallerMargin>
        <p>
          My name is Alice Hendicott and am currently working as a Software
          Developer Graduate for REA Group based in Melbourne, Australia. I
          graduated with a double bachelors degree of Applied Mathematics and
          Computer Science from Queensland University of Technology, so in a
          nutshell I love problem solving.
        </p>
        <p>
          For the past three years I have worked in front end web development
          creating conference websites for events accros the world. In my
          current role as a graduate, I have had the opportunity to work across
          several teams in REA Group. For 6 months, I was working on
          maintaining, improving and integrating the design system used accross
          our websites. I have also had the opportunnity to contribute to a
          major feature release on Australia’s number one website in property. I
          am currently working on improving my back end development skills by
          working on some of our customer systems.
        </p>
        <BoxMenuContainer>
          <MenuBoxLink to="/about">
            <MenuBox>
              <SvgContainer>
                <AboutIcon />
              </SvgContainer>
              <ContentsContainer>
                <MenuBoxSubtitle>Want to know more?</MenuBoxSubtitle>
                <MenuBoxTitle>About</MenuBoxTitle>
              </ContentsContainer>
            </MenuBox>
          </MenuBoxLink>
          <MenuBoxLink to="/portfolio">
            <MenuBox>
              <SvgContainer></SvgContainer>
              <ContentsContainer>
                <MenuBoxSubtitle>Want to see some work?</MenuBoxSubtitle>
                <MenuBoxTitle>Portfolio</MenuBoxTitle>
              </ContentsContainer>
            </MenuBox>
          </MenuBoxLink>
          <MenuBoxLink to="/blog">
            <MenuBox>
              <SvgContainer></SvgContainer>
              <ContentsContainer>
                <MenuBoxSubtitle>Want an interesting read?</MenuBoxSubtitle>
                <MenuBoxTitle>Blog</MenuBoxTitle>
              </ContentsContainer>
            </MenuBox>
          </MenuBoxLink>
        </BoxMenuContainer>
      </Contents>
    </>
  );
};

export default Home;
