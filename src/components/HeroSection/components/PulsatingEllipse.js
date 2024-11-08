import React from "react"
import styled, { css, keyframes } from "styled-components"

const pulseAnim = keyframes`
  0% {
    transform: scale(0.33) translateZ(0);
    filter: opacity(1);
  }
  50% {
    transform: scale(20) translateZ(0);
    filter: opacity(0.2);
  }
  100% {
    transform: scale(30)translateZ(0);
    filter: opacity(0);
  }
`

const SWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  z-index: 1;
  overflow: visible;
  left: 0;
  top: 0;
  transform: translateX(16em) translateY(5em);

  @media (max-width: 1700px) {
    transform: translateX(11em) translateY(5em);
  }

  @media (max-width: 1550px) {
    transform: translateX(6em) translateY(5em);
  }

  @media (max-width: 1439px) {
    transform: translateX(1em) translateY(5em);
  }

  @media (max-width: 1024px) {
    transform: translateX(-5em) translateY(33%);
  }
`

const PulsatingShape = styled.div`
  background-color: var(--cyan-color);
  border-radius: 50%;
  opacity: 0.22;
  transform: translateZ(0) scale(0.33);
  transform-origin: center center;
  animation-play-state: paused;
  width: 0px;
  height: 0px;

  animation-name: ${pulseAnim};
  animation-fill-mode: forwards;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  overflow: hidden;

  &[data-runanim="true"] {
    animation-play-state: running;
  }

  &[data-visible="true"] {
    width: 80px;
    height: 45px;
  }
`

export const PulsatingEllipse = React.memo(
  ({ canvasIsDrawn, heightToUse, inView }) => {
    return (
      <SWrapper
        style={{
          height: heightToUse,
        }}
      >
        <PulsatingShape
          data-runanim={canvasIsDrawn && inView}
          data-visible={canvasIsDrawn}
        />
      </SWrapper>
    )
  },
  (prev, next) =>
    prev.canvasIsDrawn === next.canvasIsDrawn &&
    prev.heightToUse === next.heightToUse &&
    prev.inView === next.inView
)
