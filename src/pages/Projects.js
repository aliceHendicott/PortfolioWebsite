import React from "react";
import styled from "styled-components";
import projects from "../data/projectDatabase";

import PageHeader from "../components/PageHeader";
import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";
import Box from "../components/Box";
import ButtonLink from "../components/ButtonLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCardContainer = styled(Box)`
  padding: 0px;
  display: inline-flex;
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
`;

const ProjectContents = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderNoMargin = styled(PageTitle)`
  margin-top: 0px;
`;

const ProjectImage = styled.img`
  flex-basis: 400px;
  max-width: 400px;
  object-fit: cover;
`;

const ProjectDescription = styled.p`
  margin-top: 0px;
  margin-bottom: 2.4rem;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 6px;
`;

const ProjectButtonLink = styled(ButtonLink)`
  align-self: flex-end;
`;

const ProjectCard = ({ imagePlacement, imageSrc, title, children, link }) => {
  return (
    <ProjectCardContainer>
      {imagePlacement === "left" && <ProjectImage src={imageSrc} alt={title} />}
      <ProjectContents>
        <HeaderNoMargin>{title}</HeaderNoMargin>
        <ProjectDescription>{children}</ProjectDescription>
        <ProjectButtonLink href={link}>
          Go to project <ButtonIcon icon={faExternalLinkAlt} size="sm" />
        </ProjectButtonLink>
      </ProjectContents>
      {imagePlacement === "right" && (
        <ProjectImage src={imageSrc} alt={title} />
      )}
    </ProjectCardContainer>
  );
};

const Projects = () => {
  const ProjectCards = projects.map(
    ({ index, imageSrc, title, link, description }) => (
      <ProjectCard
        imagePlacement={index % 2 === 1 ? "left" : "right"}
        imageSrc={imageSrc}
        title={title}
        link={link}
      >
        {description}
      </ProjectCard>
    )
  );

  return (
    <>
      <PageHeader>Projects</PageHeader>
      <Contents>{ProjectCards}</Contents>
    </>
  );
};

export default Projects;
