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
  overflow: hidden;
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
  width: 400px;
  height: 400px;
`;

const ProjectCard = ({ imagePlacement, imageSrc, title, children, link }) => {
  return (
    <ProjectCardContainer>
      {imagePlacement === "left" && <ProjectImage src={imageSrc} alt={title} />}
      <ProjectContents>
        <HeaderNoMargin>{title}</HeaderNoMargin>
        <p>{children}</p>
      </ProjectContents>
      {imagePlacement === "right" && (
        <ProjectImage src={imageSrc} alt={title} />
      )}
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
          imageSrc="http://placekitten.com/500/500"
          title="Project Title"
          link="#"
        >
          Doggo ipsum long woofer shoober aqua doggo long woofer, most angery
          pupper I have ever seen borkdrive shooberino yapper, heckin good boys
          and girls borkf. Dat tungg tho heckin good boys floofs stop it fren,
          dat tungg tho long bois, long woofer smol. Ruff heckin angery woofer
          adorable doggo aqua doggo, woofer. Ur givin me a spook extremely
          cuuuuuute he made many woofs fluffer.
        </ProjectCard>
      </Contents>
    </>
  );
};

export default Projects;
