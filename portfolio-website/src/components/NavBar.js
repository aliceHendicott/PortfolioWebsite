import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const NavBarContainer = styled.div`
  margin: 0;
  padding: 20px 30px;
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

const NavLink = styled.a`
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
          <NavLink href="/index">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
      </NavItemsContainer>
    </NavBarContainer>
  );
};

export default NavBar;
