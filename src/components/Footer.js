import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1rem;
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
  ${({ theme }) => theme.breakpoints.medium} {
    margin-bottom: 0;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
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
          <Icon icon={faLinkedin} size="lg" />
        </IconLink>
        <IconLink href="https://github.com/aliceHendicott/">
          <Icon icon={faGithubSquare} size="lg" />
        </IconLink>
        <IconLink href="https://codepen.io/alice2707">
          <Icon icon={faCodepen} size="md" />
        </IconLink>
      </div>
    </FlexGrid>
  </FooterContainer>
);

export default Footer;
