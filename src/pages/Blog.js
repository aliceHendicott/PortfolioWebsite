import React from "react";
import styled from "styled-components";

import BlogGraphic from "../images/Blog_Graphic_2.png";
import PageHeader from "../components/PageHeader";

const MenuGraphic = styled.img`
  max-height: 100vh;
  max-width: 100vw;
  margin: 9rem 0;
  filter: grayscale(100%);
`;

const MenuGraphicContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const GraphicTitle = styled.h2`
  font-family: "Allura";
  font-size: 3rem;
  position: absolute;
  bottom: 30%;
  margin: 0;

  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 5rem;
    bottom: 25%;
  }

  ${({ theme }) => theme.breakpoints.large} {
    font-size: 6rem;
  }
`;

const Blog = () => {
  return (
    <>
      <PageHeader>Blog</PageHeader>
      <MenuGraphicContainer>
        <MenuGraphic src={BlogGraphic} />
        <GraphicTitle>Coming Soon...</GraphicTitle>
      </MenuGraphicContainer>
    </>
  );
};

export default Blog;
