import React from "react";
import styled from "styled-components";

import Box from "../Box";
import { Badge } from "./Badge";

const ImageContainer = styled.div`
  height: 250px;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-image: ${({ src }) => `url(${src})`};
  transition: all 0.5s;
`;

const BadgeContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
`;

const StyledBox = styled(Box)`
  padding: 0;
  & div {
    box-sizing: border-box;
  }

  &:hover ${Image} {
    transform: scale(1.2);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
`;

const ProjectTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 5px;
`;

const ProjectDescription = styled.p`
  margin: 0;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectCard = ({ title, description, imageSrc, badges, link }) => {
  return (
    <ProjectLink href={link}>
      <StyledBox>
        <ImageContainer>
          <Image src={imageSrc} />
          <BadgeContainer>
            {badges.map((badge) => (
              <Badge badge={badge} />
            ))}
          </BadgeContainer>
        </ImageContainer>
        <TextContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </TextContainer>
      </StyledBox>
    </ProjectLink>
  );
};

export { ProjectCard };
