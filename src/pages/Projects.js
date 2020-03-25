import React from "react";
import styled from "styled-components";

import PageHeader from "../components/PageHeader";
import { PageTitle } from "../components/PageTitle";
import { Contents } from "../components/Contents";
import Box from "../components/Box";

const ProjectCardContainer = styled(Box)`
  padding: 0px;
  display: inline-flex;
  width: 100%;
`;

const ProjectImage = styled.img`
  border-top-left-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
`;

const ProjectCard = ({ imagePlacement, imageSrc, title, children, link }) => {
  return (
    <ProjectCardContainer>
      <ProjectImage src={imageSrc} alt={title} />
      <div>
        <PageTitle>{title}</PageTitle>
        <p>{children}</p>
      </div>
    </ProjectCardContainer>
  );
};

const Projects = () => {
  return (
    <>
      <PageHeader>Projects</PageHeader>
      <Contents>
        <ProjectCard
          imagePlacement="left"
          imageSrc="http://placekitten.com/g/300/300"
          title="Project Title"
          link="#"
        >
          Doggo ipsum long woofer shoober aqua doggo long woofer, most angery
          pupper I have ever seen borkdrive shooberino yapper, heckin good boys
          and girls borkf. Dat tungg tho heckin good boys floofs stop it fren,
          dat tungg tho long bois, long woofer smol. Ruff heckin angery woofer
          adorable doggo aqua doggo, woofer. Ur givin me a spook extremely
          cuuuuuute he made many woofs fluffer wow very biscit length boy such
          treat, dat tungg tho extremely cuuuuuute very jealous pupper borking
          doggo porgo.
        </ProjectCard>
      </Contents>
    </>
  );
};

export default Projects;
