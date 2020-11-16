import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import Burger from "./Burger";
import NavBarLinks from "./NavBarLinks";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 20px 40px;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  margin-left: -10px;
  width: 70px;
  height: 70px;
`;

const Logo = styled.img`
  width: 100%;
`;

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <NavBarContainer>
      <IconContainer>
        <Logo src={logo} />
      </IconContainer>
      {width < breakpoint ? <Burger /> : <NavBarLinks />}
    </NavBarContainer>
  );
};

export default NavBar;
