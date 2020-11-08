import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 20px 40px;
  box-sizing: border-box;
`;

const NavItemsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  align-items: center;
`;

const NavBarLink = styled(NavLink).attrs({ activeClassName: "active-link" })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text02};
  margin-right: 40px;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    color: transparent;
    background: ${({ theme }) => theme.colors.text02};
    height: 1px;
    width: 0%;
    transition: all 0.5s;
  }

  &:hover:after {
    width: 100%;
  }

  &:last-of-type {
    margin-right: 0;
  }
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
  return (
    <NavBarContainer>
      <IconContainer>
        <Logo src={logo} />
      </IconContainer>
      <NavItemsContainer>
        <NavBarLink exact to="/">
          Home
        </NavBarLink>
        <NavBarLink to="/about">About</NavBarLink>
        <NavBarLink to="/portfolio">Portfolio</NavBarLink>
        <NavBarLink to="/blog">Blog</NavBarLink>
      </NavItemsContainer>
    </NavBarContainer>
  );
};

export default NavBar;
