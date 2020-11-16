import React, { useState } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

import PopupNav from "./PopupNav";

const BurgerButtonContainer = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  z-index: ${({ state }) =>
    state === "entering" || state === "entered" || state === "exiting"
      ? 15
      : 0};

  & > div {
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background01};
  }
`;

const BurgerTopBar = styled.div`
  transform: ${({ state }) =>
    state === "entering" || state === "entered"
      ? "rotate(45deg) translateY(-5px) scaleX(1.15);"
      : "none"};
  transform-origin: left;
  transition: 0.5s;
`;

const BurgerBottomBar = styled.div`
  transform: ${({ state }) =>
    state === "entering" || state === "entered"
      ? "rotate(-45deg) translateY(5px) scaleX(1.15);"
      : "none"};
  transform-origin: left;
  transition: 0.5s;
`;

const BurgerMiddleBar = styled.div`
  transform: ${({ state }) =>
    state === "entering" || state === "entered" ? "scaleX(0)" : "none"};
  transform-origin: center;
  transition: 0.5s;
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition in={open} timeout={500}>
        {(state) => (
          <>
            <BurgerButtonContainer onClick={() => setOpen(!open)} state={state}>
              <BurgerTopBar state={state} />
              <BurgerMiddleBar state={state} />
              <BurgerBottomBar state={state} />
            </BurgerButtonContainer>
            <PopupNav state={state} onClose={() => setOpen(false)} />
          </>
        )}
      </Transition>
    </>
  );
};

export default Burger;
