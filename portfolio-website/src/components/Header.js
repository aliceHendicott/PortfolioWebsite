import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const HeaderContainer = styled.div`
  background-color: #393e41;
  color: white;
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 10px;
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
