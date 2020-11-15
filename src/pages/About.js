import React from "react";
import styled from "styled-components";

import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";

import PageHeader from "../components/PageHeader";
import Resume from "../assets/Resume.pdf";
import Timeline from "../components/about/timeline/Timeline";
import Skills from "../components/about/Skills";

const FeatureBoxHeader = styled(PageTitle)`
  margin-top: 6rem;
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    background-color: ${({ theme }) => theme.colors.text02};
  }
`;

const FeatureBoxHeaderNoMargin = styled(FeatureBoxHeader)`
  margin-top: 0rem;
  margin-bottom: 0.6rem;
`;

const FeatureBox = styled.div`
  margin-top: 9rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FeatureBoxContents = styled(Contents)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 300px;
`;

const FeatureBoxLink = styled.a.attrs({ role: "button" })`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 10px 35px;
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    box-shadow: inset 13.5em 0 0 0 ${({ theme }) => theme.colors.text02};
    border-color: ${({ theme }) => theme.colors.text02};
  }
`;

const About = () => {
  return (
    <>
      <PageHeader>About me</PageHeader>
      <Contents>
        <PageTitle>Hi there!</PageTitle>
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
      <FeatureBox>
        <FeatureBoxContents>
          <FeatureBoxHeaderNoMargin>Resume</FeatureBoxHeaderNoMargin>
          <FeatureBoxLink href={Resume}>Download Resume</FeatureBoxLink>
        </FeatureBoxContents>
      </FeatureBox>
      <Contents>
        <PageTitle>My Journey</PageTitle>
        <Timeline />
      </Contents>
      <FeatureBox>
        <Contents>
          <FeatureBoxHeader>Experience with</FeatureBoxHeader>
          <Skills />
        </Contents>
      </FeatureBox>
    </>
  );
};

export default About;
