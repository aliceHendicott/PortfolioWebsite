import React from "react";
import styled from "styled-components";

import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";
import PageHeader from "../components/PageHeader";
import Box from "../components/Box";

import REAGroupLogo from "../images/REAGroupLogo.jpg";
import qutLogo from "../images/qutLogo.jpg";
import MCILogo from "../images/MCILogo.png";

import Timeline, { TimelineItem } from "../components/Timeline";
import Skill from "../components/Skill";

const HeaderNoMargin = styled(PageTitle)`
  margin-top: 0px;
`;

const SkillsContainer = styled.div`
  display: flex;

  & > div:last-of-type {
    margin-right: 0;
  }
`;

const SkillsBox = styled(Box)`
  flex: 1 1 0;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const SkillsTitle = styled.h2`
  font-weight: 400;
  padding-bottom: 5px;
  margin: 0;
  border-bottom: 2px solid #8d2b58;
`;

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
            logo={qutLogo}
          >
            Bachelor of Information Technology (Computer Science) and Bachelor
            of Mathematics (Applied and Computational)
          </TimelineItem>
          <TimelineItem
            title="MCI"
            placement="right"
            dateRange="Mar 2016 - Dec 2019"
            logo={MCILogo}
          >
            Website Master (Wordpress)
          </TimelineItem>
          <TimelineItem
            title="REA Group"
            placement="left"
            dateRange="Feb 2020 - present"
            logo={REAGroupLogo}
          >
            Graduate Software Developer
          </TimelineItem>
        </Timeline>
        <PageTitle>Skills</PageTitle>
        <SkillsContainer>
          <SkillsBox>
            <SkillsTitle>Professional Skills</SkillsTitle>
            <Skill skill="CSS" proficiencyLevel={5} />
            <Skill skill="HTML" proficiencyLevel={5} />
            <Skill skill="Javascript" proficiencyLevel={3} />
            <Skill skill="React" proficiencyLevel={3} />
          </SkillsBox>
          <SkillsBox>
            <SkillsTitle>Personal Skills</SkillsTitle>
          </SkillsBox>
        </SkillsContainer>
        <PageTitle>Interests</PageTitle>
      </Contents>
    </>
  );
};

export default About;
