import React from "react";
import styled from "styled-components";

const Link = styled.a.attrs({ role: "button" })`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-decoration: none;
  padding: 10px 35px;
  border-radius: 0.1875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const ButtonLink = ({ className, children, ...props }) => (
  <Link className={className} {...props}>
    {children}
  </Link>
);

export default ButtonLink;
