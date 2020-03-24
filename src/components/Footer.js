import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { Contents } from "./Contents";

const FooterContainer = styled.div`
  background-color: #393e41;
  color: white;
  font-size: 1rem;
  margin-top: 80px;
`;

const FlexGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CopyrightStatement = styled.div`
  font-size: 0.8rem;
`;

const LinkedinIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: #0e76a8;
  }
`;

const GithubIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: #f5cee0;
  }
`;

const IconLink = styled.a`
  color: inherit;
  margin-left: 5px;
`;

const Footer = () => (
  <FooterContainer>
    <Contents>
      <FlexGrid>
        <CopyrightStatement>
          Copyright &copy; 2020 Alice Hendicott. All rights reserved.
        </CopyrightStatement>
        <div>
          <IconLink href="https://au.linkedin.com/in/alice-hendicott-04642011a">
            <LinkedinIcon icon={faLinkedin} size="lg" />
          </IconLink>
          <IconLink href="https://github.com/aliceHendicott/">
            <GithubIcon icon={faGithubSquare} size="lg" />
          </IconLink>
        </div>
      </FlexGrid>
    </Contents>
  </FooterContainer>
);

export default Footer;
