import React from "react";
import styled from "styled-components";

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
`;

const CopyrightStatement = styled.div`
  font-size: 0.8rem;
`;

const ContactLinks = styled.div``;

const Footer = () => (
  <FooterContainer>
    <Contents>
      <FlexGrid>
        <CopyrightStatement>
          Copyright &copy; 2020 Alice Hendicott. All rights reserved.
        </CopyrightStatement>
        <ContactLinks>Links</ContactLinks>
      </FlexGrid>
    </Contents>
  </FooterContainer>
);

export default Footer;
