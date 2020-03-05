import React from "react";
import styled from "styled-components";

import Hero from "../components/Hero";

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 0;
`;

const Home = () => {
  return (
    <>
      <Hero />
      <Contents>
        <h1>Home</h1>
      </Contents>
    </>
  );
};

export default Home;
