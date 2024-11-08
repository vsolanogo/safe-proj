import React, { useEffect } from "react"
import styled, { keyframes, css } from "styled-components"
import { TooltipContent } from "./TooltipContent"
import { useHover } from "react-hookedup"

const scale = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    transform: scale(.85);
    opacity: 0.6;
  }
  
  100% {    
    transform: scale(1);
    opacity: 0;
  }
`

export const DotS = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--dotscolor-color);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  will-change: transform;

  &::before {
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 28px;
    height: 28px;
    transform: scale(0);
    border: 1px solid var(--cyan-color);
    transition: all 0.2s ease-out;
  }

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    background-color: var(--dotscolor-color);
    transition: background-color 0.2s ease-out;
  }

  &[data-active="true"] {
    &::before {
      width: 36px;
      height: 36px;
      animation: ${scale} 1s infinite;
    }

    &::after {
      background-color: var(--cyan-color);
    }
  }
`

const PopupComponent = styled.div`
  z-index: 2;
  position: absolute;
  left: 100%;
  bottom: 0;
  will-change: transform;
  transform: translateY(0px);
  filter: opacity(0);
  transition: all 0.2s ease-out;
  pointer-events: none;
`

export const DotWrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  width: 1.91em;
  height: 1.91em;
  padding: 0.53em;
  cursor: pointer;
  z-index: 4000;
  transform: ${({ x, y }) => `translateX(${x}em) translateY(${y}em)`};
  filter: opacity(0);
  pointer-events: all;
  transition: all 0.3s 0s ease-out, filter 0.3s 1.7s ease-out;

  &:hover {
    z-index: 5000;

    ${DotS} {
      &::before {
        transform: scale(1);
      }

      &::after {
        background-color: var(--cyan-color);
      }
    }

    ${PopupComponent} {
      transform: translateY(-25px);
      filter: opacity(1);
    }
  }

  @media (max-width: 640px) {
    display: none;
  }

  &[data-canvasisdrawn="true"] {
    filter: opacity(1);
  }
`

export const Dot = React.memo(
  ({ x, y, active, text, title, canvasIsDrawn, onDotHover, imgComponent }) => {
    const { hovered, bind } = useHover()

    useEffect(() => {
      if (hovered) {
        onDotHover(false)
      } else {
        onDotHover(true)
      }
    }, [hovered])

    return (
      <DotWrapper x={x} y={y} data-canvasisdrawn={canvasIsDrawn} {...bind}>
        <DotS data-active={active} />
        <PopupComponentWrapper
          text={text}
          title={title}
          imgComponent={imgComponent}
        />
      </DotWrapper>
    )
  },
  (prev, next) =>
    prev.active === next.active && prev.canvasIsDrawn === next.canvasIsDrawn
)

const PopupComponentWrapper = ({ text, title, imgComponent }) => (
  <PopupComponent>
    <TooltipContent text={text} title={title} imgComponent={imgComponent} />
  </PopupComponent>
)
