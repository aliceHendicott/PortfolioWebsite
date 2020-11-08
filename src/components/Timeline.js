import React from "react";
import styled from "styled-components";

import Box from "../components/Box";

const TimelineItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 5px rgba(245, 206, 224, 0.52);
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TimelineItemContainerLeft = styled(TimelineItemContainer)`
  margin-right: 50%;

  &::after {
    right: -18px;
  }
`;

const TimelineItemContainerRight = styled(TimelineItemContainer)`
  margin-left: 50%;

  &::after {
    left: -18px;
  }
`;

const TimelineItemContents = styled(Box)`
  position: relative;
  padding: 30px 20px;

  &:after {
    z-index: -10;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 0;
    top: calc(50% - 8px);
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.background01};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.5rem 0px;
  }

  &:before {
    z-index: 20;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    margin-right: 0;
    bottom: 0;
    top: calc(50% - 8px);
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.background01};
  }
`;

const TimelineItemContentsLeft = styled(TimelineItemContents)`
  margin: 20px 50px 20px 0px;

  &::after {
    right: -8px;
  }

  &::before {
    right: -8px;
  }
`;

const TimelineItemContentsRight = styled(TimelineItemContents)`
  margin: 20px 0px 20px 50px;

  &::after {
    left: -8px;
  }

  &::before {
    left: -8px;
  }
`;

const ItemTitle = styled.h4`
  margin: 0;
`;

const ItemSubtitle = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 0px;
  color: #808080;
`;

const ItemContents = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0;
  margin-top: 10px;
  text-align: left;
`;

const ItemTopSection = styled.div`
  display: inline-flex;
`;

const ItemLogo = styled.img`
  max-width: 50px;
  flex-basis: 50px;
  margin-right: 10px;
  object-fit: contain;
  align-self: center;
`;

const TimelineItem = ({ dateRange, logo, title, placement, children }) => {
  const TimelineContent = () => (
    <>
      <ItemTopSection>
        <ItemLogo src={logo} />
        <div>
          <ItemTitle>{title}</ItemTitle>
          <ItemSubtitle>{dateRange}</ItemSubtitle>
        </div>
      </ItemTopSection>
      <ItemContents>{children}</ItemContents>
    </>
  );

  return (
    <>
      {placement === "left" ? (
        <TimelineItemContainerLeft>
          <TimelineItemContentsLeft>
            <TimelineContent />
          </TimelineItemContentsLeft>
        </TimelineItemContainerLeft>
      ) : (
        <TimelineItemContainerRight>
          <TimelineItemContentsRight>
            <TimelineContent />
          </TimelineItemContentsRight>
        </TimelineItemContainerRight>
      )}
    </>
  );
};

const TimelineBar = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 2px);
    width: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TimelineContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    left: calc(50% - 5px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    left: calc(50% - 5px);
  }
`;

const Timeline = ({ children }) => {
  return (
    <TimelineContainer>
      <TimelineBar>{children}</TimelineBar>
    </TimelineContainer>
  );
};

export default Timeline;

export { TimelineItem };
