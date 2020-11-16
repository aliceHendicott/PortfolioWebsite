import React from "react";
import styled from "styled-components";
import projects from "../data/projectDatabase";

import PageHeader from "../components/PageHeader";
import { Contents } from "../components/Contents";

import { ProjectCard } from "../components/portfolio/ProjectCard";

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 40px;
  margin: 9rem 0;
  box-sizing: border-box;

  ${({ theme }) => theme.breakpoints.medium} {
    grid-template-columns: 80%;
  }

  ${({ theme }) => theme.breakpoints.large} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Portfolio = () => {
  const ProjectCards = projects.map(
    ({ imageSrc, title, link, description, badges }) => (
      <ProjectCard
        imageSrc={imageSrc}
        title={title}
        description={description}
        link={link}
        badges={badges}
      />
    )
  );

  return (
    <>
      <PageHeader>Portfolio</PageHeader>
      <Contents>
        <ProjectCardsContainer>{ProjectCards}</ProjectCardsContainer>
      </Contents>
    </>
  );
};

export default Portfolio;
