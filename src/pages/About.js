import React from "react";
import styled from "styled-components";

import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";
import PageHeader from "../components/PageHeader";
import Box from "../components/Box";

const HeaderNoMargin = styled(PageTitle)`
  margin-top: 0px;
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
        <PageTitle>Education</PageTitle>
        <PageTitle>Skills</PageTitle>
        <PageTitle>Work Experience</PageTitle>
        <PageTitle>Interests</PageTitle>
      </Contents>
    </>
  );
};

export default About;
