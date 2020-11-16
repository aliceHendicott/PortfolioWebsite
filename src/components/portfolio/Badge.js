import React from "react";
import styled from "styled-components";

import Box from "../Box";

const StyledBox = styled(Box)`
  padding: 0 10px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  margin-right: 10px;
`;

const ColorDot = styled.div`
  background-color: ${({ color }) => color};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-right: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const Badge = ({ badge }) => {
  console.log(badge);
  return (
    <StyledBox>
      <ColorDot color={badge.color} />
      <Text>{badge.badge}</Text>
    </StyledBox>
  );
};

export { Badge };
