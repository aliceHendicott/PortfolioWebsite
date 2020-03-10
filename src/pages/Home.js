import React from "react";
import styled from "styled-components";

import Hero from "../components/Hero";
import { Contents } from "../components/Contents";

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
