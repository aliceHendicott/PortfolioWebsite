import React from "react";
import styled from "styled-components";

const Section = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 10px;
`;

const Contents = ({ children }) => <Section>{children}</Section>;

export { Contents };
