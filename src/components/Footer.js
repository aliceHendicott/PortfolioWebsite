import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  color: white;
  font-size: 1rem;
  margin-top: 80px;
  padding: 5px 10px;
`;

const FlexGrid = styled.div`
  text-align: center;
  ${({ theme }) => theme.breakpoints.medium} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CopyrightStatement = styled.div`
  font-size: 0.8rem;
  margin-bottom: 5px;
  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;

const LinkedinIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: #0e76a8;
  }
`;

const GithubIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const IconLink = styled.a`
  color: inherit;
  margin-left: 5px;
`;

const Footer = () => (
  <FooterContainer>
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
  </FooterContainer>
);

export default Footer;
