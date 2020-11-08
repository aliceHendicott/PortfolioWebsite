import React from "react";
import styled from "styled-components";

const Section = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
`;

const Contents = ({ className, children }) => (
  <Section className={className}>{children}</Section>
);

export { Contents };
