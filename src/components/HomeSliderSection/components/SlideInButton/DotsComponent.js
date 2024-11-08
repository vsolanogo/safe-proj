import React from "react"
import { SvgLinearGradient } from "./SvgLinearGradient"
import { theme } from "../../../../styles"
import { slideData } from "../../dataHelpers/sliderData"
import styled, { css } from "styled-components"

const CircleWrapper = styled.div`
  width: 556px;
  height: 556px;
  position: relative;
  z-index: 100;
`

const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  z-index: 20;
  circle {
    transition: all 0.2s linear;
    cursor: pointer;
    position: relative;
    z-index: 100;
  }
`

const sharedCirclestyle = css`
  height: 100%;
  width: 100%;
  transform: rotate(-180deg);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  svg {
    max-width: 100%;
    overflow: visible;
  }

  circle {
    display: block;
    fill: transparent;
    stroke-linecap: round;
    stroke-dasharray: 1400;
    stroke-width: 1px;
    transform-origin: 50% 50%;
    transition: 0.5s linear;
  }
`

const GreyCircleWrapper = styled.div`
  ${sharedCirclestyle};
  z-index: 10;

  circle {
    stroke: #efefef;
    stroke-dashoffset: 1400;
  }

  &[data-runanim="true"] {
    circle {
      stroke-dashoffset: 1;
    }
  }
`

const BlueCircleWrapper = styled.div`
  ${sharedCirclestyle};
  z-index: 15;

  circle {
    stroke: var(--blue-color);
    stroke-dashoffset: 400;
  }

  &[data-dashoffset="722"] {
    circle {
      stroke-dashoffset: 722;
    }
  }

  &[data-dashoffset="842"] {
    circle {
      stroke-dashoffset: 842;
    }
  }

  &[data-dashoffset="954"] {
    circle {
      stroke-dashoffset: 954;
    }
  }

  &[data-dashoffset="1400"] {
    circle {
      stroke-dashoffset: 1400;
    }
  }
`

const CoverGradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 17;
  transform: scale(1.1);
`

export const DotsComponent = ({
  drawGrayCircle,
  showSlideItems,
  activeSlide,
  setActiveSlide,
  blueCircle,
}) => {
  return (
    <CircleWrapper>
      <GreyCircleWrapper data-runanim={drawGrayCircle}>
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" />
        </svg>
      </GreyCircleWrapper>

      <BlueCircleWrapper data-dashoffset={blueCircle}>
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" />
        </svg>
      </BlueCircleWrapper>

      <CoverGradient />

      <StyledSvg width="556" height="556" viewBox="0 0 692 692" fill="none">
        <SvgLinearGradient
          id="blueGradient"
          stopColor1={theme.colors.white}
          stopColor2={theme.colors.blue}
        />
        {showSlideItems && (
          <>
            {slideData.map(slide => (
              <circle
                key={slide.id}
                fill={
                  activeSlide.id === slide.id
                    ? theme.colors.blue
                    : theme.colors.borderLight
                }
                cx={slide.dotPositions.x}
                cy={slide.dotPositions.y}
                r={activeSlide.id === slide.id ? "15" : "10"}
                strokeWidth="8"
                stroke={theme.colors.white}
                onClick={() => setActiveSlide(slide)}
              />
            ))}
          </>
        )}
      </StyledSvg>
    </CircleWrapper>
  )
}
