import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainner = styled.div`
  position: fixed;
  z-index: 10;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text02};
  transition: 0.5s;
  transform: translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 0 : 200)}vw
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavBarLink = styled(NavLink).attrs({ activeClassName: "active-link" })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text02};
  margin-bottom: 30px;
  position: relative;
  font-size: 1.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const PopupNav = ({ state, onClose }) => (
  <NavContainner state={state}>
    <NavBarLink exact to="/" onClick={onClose}>
      Home
    </NavBarLink>
    <NavBarLink to="/about" onClick={onClose}>
      About
    </NavBarLink>
    <NavBarLink to="/portfolio" onClick={onClose}>
      Portfolio
    </NavBarLink>
    <NavBarLink to="/blog" onClick={onClose}>
      Blog
    </NavBarLink>
  </NavContainner>
);

export default PopupNav;
