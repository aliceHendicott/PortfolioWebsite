import React from "react";
import styled from "styled-components";

import Hero from "../components/Hero";
import { Contents } from "../components/Contents";
import { PageTitle } from "../components/PageTitle";
import { NavLink } from "react-router-dom";

import AboutGraphic from "../images/About_Me_Graphic_2.png";
import PortfolioGraphic from "../images/Portfolio_Graphic_2.png";
import BlogGraphic from "../images/Blog_Graphic_2.png";

const HeaderSmallerMargin = styled(PageTitle)`
  margin-top: 0rem;
`;

const MenuGraphic = styled.img`
  max-height: 100vh;
  max-width: 100vw;
  transition: all 0.5s;
`;

const MenuBoxLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover ${MenuGraphic} {
    transform: scale(1.1);
  }
`;

const GraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0;
`;

const GraphicTitle = styled.h2`
  font-family: "Allura";
  font-size: 3rem;
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  margin: 0;
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 5.5rem;
  }

  ${({ theme }) => theme.breakpoints.large} {
    font-size: 8rem;
  }
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
      </Contents>
      <GraphicsContainer>
        <MenuBoxLink to="/about">
          <MenuGraphic src={AboutGraphic} />
          <GraphicTitle bottom={"15%"} left={"20%"}>
            About
          </GraphicTitle>
        </MenuBoxLink>
        <MenuBoxLink to="/portfolio">
          <MenuGraphic src={PortfolioGraphic} />
          <GraphicTitle bottom={"14%"} right={"22%"}>
            Portfolio
          </GraphicTitle>
        </MenuBoxLink>
        <MenuBoxLink to="/blog">
          <MenuGraphic src={BlogGraphic} />
          <GraphicTitle bottom={"10%"} left={"20%"}>
            Blog
          </GraphicTitle>
        </MenuBoxLink>
      </GraphicsContainer>
    </>
  );
};

export default Home;
