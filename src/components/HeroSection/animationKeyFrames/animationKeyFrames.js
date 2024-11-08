import { keyframes } from "styled-components"

export const ImgWrapper2Animation = keyframes`
  0% {
    filter: opacity(0);
  }
  50% {
    filter: opacity(0);
  }
  100% {
    filter: opacity(0.7);
  }
`

export const GlowWrapperAnimation = keyframes`
  0% {
    filter: opacity(0);
  }
  60% {
    filter: opacity(0);
  }
  100% {
    filter: opacity(0.5);
  }
`

export const PhoneScreensWrapperNewAnimation = keyframes`
  0% {
    filter: opacity(0);
    transform: translateY(-100px) translateZ(0);
  }
  60% {
    filter: opacity(0);
    transform: translateY(-100px) translateZ(0);
  }
  100% {
    filter: opacity(1);
    transform: translateY(0px) translateZ(0);
  }
`
 
export const ShadowWrapperAnimation = keyframes`
  0% {
    filter: opacity(0);
  }
  60% {
    filter: opacity(0);
  }
  100% {
    filter: opacity(1);
  }
`