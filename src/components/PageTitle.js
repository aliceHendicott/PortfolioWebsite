import React from "react";
import styled from "styled-components";

const PageHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  margin-top: 9rem;
  color: ${({ theme }) => theme.colors.text01};

  &::after {
    content: "";
    display: block;
    width: 6rem;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PageTitle = ({ className, children }) => {
  return <PageHeading className={className}>{children}</PageHeading>;
};

export { PageTitle };
