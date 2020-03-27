import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: #393e41;
  color: white;
`;

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 10px;
`;

const NavBarContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
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

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 10px 15px;
  border-radius: 0.1875rem;
  &:hover {
    background-color: #212426;
  }
`;

const NavLinkButton = styled(NavLink)`
  padding: 10px 35px;
  background-color: #8d2b58;

  &:hover {
    background-color: #6f2245;
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
      <Contents>
        <NavBarContainer>
          <IconContainer>
            <Logo src={logo} />
          </IconContainer>
          <NavItemsContainer>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLinkButton to="/contact">Contact</NavLinkButton>
            </NavItem>
          </NavItemsContainer>
        </NavBarContainer>
      </Contents>
    </HeaderContainer>
  );
};

export default NavBar;
