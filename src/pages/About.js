import React from "react";
import styled from "styled-components";

import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";
import PageHeader from "../components/PageHeader";
import Box from "../components/Box";

const HeaderNoMargin = styled(PageTitle)`
  margin-top: 0px;
`;

const TimelineItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TimelineItemContainerLeft = styled(TimelineItemContainer)`
  margin-right: 50%;

  &::after {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    right: calc(-18px - 4px);
    border: 4px solid white;
    z-index: 10;
    background-color: #8d2b58;
  }
`;

const TimelineItemContainerRight = styled(TimelineItemContainer)`
  margin-left: 50%;

  &::before {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    left: calc(-18px - 4px);
    border: 4px solid white;
    z-index: 10;
    background-color: #8d2b58;
  }
`;

const TimelineItemContents = styled(Box)`
  margin: 30px 50px;
  position: relative;
  padding: 30px 20px;
`;

const TimelineItemContentsLeft = styled(TimelineItemContents)`
  &::after {
    z-index: -10;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 0;
    top: calc(50% - 8px);
    right: -8px;
    transform: rotate(45deg);
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.5rem 0px;
  }

  &::before {
    z-index: 20;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    margin-right: 0;
    bottom: 0;
    top: calc(50% - 8px);
    right: -8px;
    transform: rotate(45deg);
    background-color: white;
  }
`;

const TimelineItemContentsRight = styled(TimelineItemContents)`
  &::after {
    z-index: -10;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 0;
    top: calc(50% - 8px);
    left: -8px;
    transform: rotate(45deg);
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.5rem 0px;
  }

  &::before {
    z-index: 20;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    margin-right: 0;
    bottom: 0;
    top: calc(50% - 8px);
    left: -8px;
    transform: rotate(45deg);
    background-color: white;
  }
`;

const ItemTitle = styled.h4`
  margin: 0;
`;

const ItemSubtitle = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  color: #808080;
`;

const ItemContents = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0;
`;

const TimelineItem = ({ dateRange, icon, title, placement, children }) => {
  const TimelineContent = () => (
    <>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{dateRange}</ItemSubtitle>
      <ItemContents>{children}</ItemContents>
    </>
  );

  return (
    <>
      {placement === "left" ? (
        <TimelineItemContainerLeft>
          <TimelineItemContentsLeft>
            <TimelineContent />
          </TimelineItemContentsLeft>
        </TimelineItemContainerLeft>
      ) : (
        <TimelineItemContainerRight>
          <TimelineItemContentsRight>
            <TimelineContent />
          </TimelineItemContentsRight>
        </TimelineItemContainerRight>
      )}
    </>
  );
};

const TimelineBar = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 2px);
    width: 4px;
    background-color: white;
  }
`;

const TimelineContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    left: calc(50% - 5px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    left: calc(50% - 5px);
  }
`;

const Timeline = ({ children }) => {
  return (
    <TimelineContainer>
      <TimelineBar>{children}</TimelineBar>
    </TimelineContainer>
  );
};

const About = () => {
  return (
    <>
      <PageHeader>About me</PageHeader>
      <Contents>
        <Box>
          <HeaderNoMargin>Hi there!</HeaderNoMargin>
          <p>
            My name is Alice Hendicott and am currently working as a Software
            Developer Graduate for REA Group based in Melbourne, Australia. I
            graduated with a double bachelors degree of Applied Mathematics and
            Computer Science from Queensland University of Technology, so in a
            nutshell I love problem solving.
          </p>
          <p>
            For the past three years I have worked in front end web development
            but I am also planning to dabble some more in the back end world.
            Currently I am working on the design system for REA Group.
          </p>
        </Box>
        <PageTitle>My Journey</PageTitle>
        <Timeline>
          <TimelineItem
            title="Queensland University of Technology"
            placement="left"
            dateRange="Feb 2016 - Nov 2019"
          >
            Bachelor of Information Technology (Computer Science) and Bachelor
            of Mathematics (Applied and Computational)
          </TimelineItem>
          <TimelineItem title="MCI" placement="right"></TimelineItem>
        </Timeline>
        <PageTitle>Skills</PageTitle>
        <PageTitle>Interests</PageTitle>
      </Contents>
    </>
  );
};

export default About;
