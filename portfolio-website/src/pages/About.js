import React from "react";
import styled from "styled-components";

import { PageTitle } from "../components/PageTitle";

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 0;
`;

const About = () => {
  return (
    <Contents>
      <PageTitle>About</PageTitle>
    </Contents>
  );
};

export default About;
