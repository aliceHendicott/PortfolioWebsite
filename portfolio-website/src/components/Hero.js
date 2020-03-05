import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #393e41;
  color: white;
  text-align: center;
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 10px;
`;

const Hero = () => {
  return (
    <HeaderContainer>
      <Contents>Test</Contents>
    </HeaderContainer>
  );
};

export default Hero;
