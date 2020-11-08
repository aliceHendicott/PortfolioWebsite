import React from "react";
import styled from "styled-components";
import projects from "../data/projectDatabase";

import PageHeader from "../components/PageHeader";
import { Contents } from "../components/Contents";

import { ProjectCard as NewProjectCard } from "../components/ProjectCard";

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin: 9rem 0;
  box-sizing: border-box;
`;

const Portfolio = () => {
  const ProjectCards = projects.map(
    ({ imageSrc, title, link, description, badges }) => (
      <NewProjectCard
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
