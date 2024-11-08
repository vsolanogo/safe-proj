import { keyframes } from "styled-components"

export const fadeInElemBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const floatDiagonally = keyframes`
  0% {
    transform: rotate(-16.97deg) translateX(0);
  }
  50% {
    transform: rotate(-16.97deg) translateX(50px);
  }
  100% {
    transform: rotate(-16.97deg) translateX(0px);
  }
`