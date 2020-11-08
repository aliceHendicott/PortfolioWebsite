import React from "react";
import styled, { keyframes } from "styled-components";

const draw = keyframes`
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const dot = keyframes`
    to {
      opacity: 1;
    }
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 10;
  stroke: #ababab;
`;

const CircleOverlay = styled(Circle)`
  stroke: #ac6787;
  opacity: 0;
  stroke-dasharray: 1000;
  stroke-dashoffset: 2000;
`;

const BaseI = styled.line`
  stroke: #ababab;
  stroke-width: 10;
  stroke-linecap: round;
`;

const BaseIOverlay = styled(BaseI)`
  stroke: #ac6787;
  opacity: 0;
  stroke-dasharray: 1000;
  stroke-dashoffset: 2000;
`;

const DotI = styled.circle`
  fill: #ababab;
`;

const DotIOverlay = styled.circle`
  fill: #ac6787;
  opacity: 0;
`;

const Container = styled.svg`
  width: 100px;
  height: 100px;

  &:hover ${CircleOverlay} {
    opacity: 1;
    animation: ${draw} 3s;
  }

  &:hover ${BaseIOverlay} {
    opacity: 1;
    animation: ${draw} 3s;
  }
`;

const AboutIcon = () => (
  <Container>
    <Circle cx="50" cy="50" r="45" />
    <CircleOverlay cx="50" cy="50" r="45" />
    <BaseI x1="50" y1="48" x2="50" y2="75" />
    <BaseIOverlay x1="50" y1="48" x2="50" y2="75" />
    <DotI cx="50" cy="30" r="6" />
    <DotIOverlay cx="50" cy="30" r="6" />
  </Container>
);

export { AboutIcon };
