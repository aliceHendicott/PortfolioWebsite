import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

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
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const IconContainer = styled.div`
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
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
      </NavItemsContainer>
    </NavBarContainer>
  );
};

export default NavBar;