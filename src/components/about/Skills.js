import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faSass,
  faWordpress,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import scalaLogo from "../../images/ScalaLogo.png";

const LogoContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  margin-top: 4rem;
  margin-bottom: 6rem;

  ${({ theme }) => theme.breakpoints.medium} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.large} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.text02};

  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 9rem;
  }
`;

const ScalaIcon = styled.img`
  height: 7rem;

  ${({ theme }) => theme.breakpoints.medium} {
    height: 9rem;
  }
`;

const Skills = () => (
  <LogoContainer>
    <IconContainer>
      <Icon icon={faReact} size="lg" title="React" />
    </IconContainer>
    <IconContainer>
      <Icon icon={faJs} size="lg" title="Javascript" />
    </IconContainer>
    <IconContainer>
      <Icon icon={faCss3} size="lg" title="CSS" />
    </IconContainer>
    <IconContainer>
      <Icon icon={faSass} size="lg" title="Sass" />
    </IconContainer>
    <IconContainer>
      <Icon icon={faHtml5} size="lg" title="HTML" />
    </IconContainer>
    <IconContainer>
      <Icon icon={faWordpress} size="lg" title="Wordpress" />
    </IconContainer>
    <IconContainer>
      <Icon icon={faGit} size="lg" title="Git" />
    </IconContainer>
    <IconContainer>
      <ScalaIcon src={scalaLogo} title="Scala" />
    </IconContainer>
  </LogoContainer>
);

export default Skills;
