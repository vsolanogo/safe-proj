import { css } from "styled-components"
import { size } from "../../../styles/helpers"

export const videoContainerCss = css`
  width: 100vw;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #000000;
  overflow: hidden;
  z-index: -1;
  
  video {
     transform: translateX(50%) translateY(-20%);
     opacity: 1;
     z-index: -1;
  }
  
  @media (max-width: ${size.tablet}px) {
    display: none;
  }
`