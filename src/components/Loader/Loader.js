import styled from "styled-components"
import { default as mixins } from "../../styles/mixins"
import React from "react"

const LoaderContainer = styled.div`
  ${mixins.displayFlex(null, "center", "center")};
  transition: all 0.2s linear;

  svg {
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: 40px;
    height: 40px;

    & .path {
      stroke: var(--blue-color);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export const Loader = () => (
  <LoaderContainer>
    <svg className="spinner" viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="3"
      />
    </svg>
  </LoaderContainer>
)
