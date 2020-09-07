import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background01};
  color: white;
  position: fixed;
  z-index: 30;
  width: 100%;
  box-shadow: 0px 3px 7px 0px rgba(41, 41, 41, 1);
`;

const NavBarContainer = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const NavItemsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 3px;
  text-transform: uppercase;
  font-weight: bold;

  &:last-of-type {
    margin-right: 0;
  }
`;

const NavBarLink = styled(NavLink).attrs({ activeClassName: "active-link" })`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 10px 15px;
  border-radius: 0.1875rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }
`;

const NavLinkButton = styled(NavBarLink)`
  padding: 10px 35px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
`;

const Logo = styled.img`
  width: 100%;
`;

const NavBar = () => {
  return (
    <HeaderContainer>
      <NavBarContainer>
        <IconContainer>
          <Logo src={logo} />
        </IconContainer>
        <NavItemsContainer>
          <NavItem>
            <NavBarLink exact to="/">
              Home
            </NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="/about">About</NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="/portfolio">Portfolio</NavBarLink>
          </NavItem>
          <NavItem>
            <NavLinkButton to="/contact">Contact</NavLinkButton>
          </NavItem>
        </NavItemsContainer>
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default NavBar;
