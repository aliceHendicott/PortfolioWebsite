import React from "react";
import styled from "styled-components";

import REAGroupLogo from "../../../images/REAGroupLogo.png";
import qutLogo from "../../../images/qutLogo.jpg";
import MCILogo from "../../../images/MCILogo.png";

import { Year } from "./Year";
import { TimelineItem } from "./TimelineItem";

const TimelineBar = styled.div`
  margin: auto;
  width: 3px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    background-color: inherit;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -5px;
  }

  &::after {
    content: "";
    background-color: inherit;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    bottom: -5px;
    left: -5px;
  }
`;

const TimelimeContentsContainer = styled.div`
  padding: 10px;
  width: 100vw;

  & > div:last-of-type {
    margin-bottom: 7rem;
  }
`;

const Timeline = () => (
  <TimelineBar>
    <TimelimeContentsContainer>
      <Year year={2016} />
      <TimelineItem
        title="Queensland University of Technology"
        dateRange="Feb 2016 - Nov 2019"
        logo={qutLogo}
      >
        Bachelor of Information Technology (Computer Science)
        <br />
        Bachelor of Mathematics (Applied and Computational)
      </TimelineItem>
      <TimelineItem title="MCI" dateRange="Mar 2016 - Dec 2019" logo={MCILogo}>
        Website Master (Wordpress)
      </TimelineItem>
      <Year year={2020} />
      <TimelineItem
        title="REA Group"
        dateRange="Feb 2020 - present"
        logo={REAGroupLogo}
      >
        Graduate Software Developer
      </TimelineItem>
    </TimelimeContentsContainer>
  </TimelineBar>
);

export default Timeline;
