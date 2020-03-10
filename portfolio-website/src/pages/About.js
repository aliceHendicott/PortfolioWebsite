import React from "react";
import styled from "styled-components";

import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader>About me</PageHeader>
      <Contents>
        <PageTitle>Bio</PageTitle>
        <PageTitle>Education</PageTitle>
        <PageTitle>Skills</PageTitle>
        <PageTitle>Work Experience</PageTitle>
        <PageTitle>Interests</PageTitle>
      </Contents>
    </>
  );
};

export default About;
