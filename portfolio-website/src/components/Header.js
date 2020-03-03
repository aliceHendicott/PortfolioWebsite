import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const HeaderContainer = styled.div`
  background-color: #08101f;
  padding: 30px 0px;
  color: white;
  position: relative;

  &:after {
    background: inherit;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    bottom: 0;
    transform: skewY(-1.5deg);
    transform-origin: 100%;
  }
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Contents>
        <NavBar />
      </Contents>
    </HeaderContainer>
  );
};

export default Header;
