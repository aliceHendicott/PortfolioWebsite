import React from "react";
import styled from "styled-components";

const Link = styled.a.attrs({ role: "button" })`
  display: block;
  background-color: #8d2b58;
  color: white;
  text-decoration: none;
  padding: 10px 35px;
  border-radius: 0.1875rem;

  &:hover {
    background-color: #6f2245;
  }
`;

const ButtonLink = ({ className, children, ...props }) => (
  <Link className={className} {...props}>
    {children}
  </Link>
);

export default ButtonLink;
