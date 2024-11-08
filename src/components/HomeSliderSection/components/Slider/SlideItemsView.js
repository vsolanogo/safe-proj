import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"

import { slideData } from "../../dataHelpers/sliderData"
import { SlideItem } from "./SlideItem"
import { size } from "../../../../styles"

const a1 = keyframes`
  0% {
    filter: opacity(0);
    transform: translateX(-600px) scale(0.5);
  }
  
  100% {
    filter: opacity(1);
    transform: translateX(-330px) scale(1);
  }
`

const animTablet = keyframes`
  0% {
    filter: opacity(0);
    transform: translateX(-600px) scale(0.5);
  }
  
  100% {
    filter: opacity(1);
    transform: translateX(0) scale(1);
  }
`

const SlideItemsWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 25px;
  filter: opacity(0);
  transform: translateX(-600px) scale(0.5);
  animation: ${({ runAnimation }) =>
    runAnimation
      ? css`
          ${a1}
        `
      : css``};
  animation-fill-mode: forwards;
  animation-direction: ease-in;
  animation-duration: 1000ms;

  @media (max-width: ${size.laptop}px) {
    padding-top: 0;
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    padding-top: 0;
    animation: ${({ runAnimation }) =>
      runAnimation
        ? css`
            ${animTablet}
          `
        : css``};
    animation-fill-mode: forwards;
    animation-direction: ease-in;
    animation-duration: 1000ms;
  }
`

export const SlideItemsView = ({
  activeSlide,
  setActiveSlide,
  showSlideItems,
}) => {
  const [itemActive, setItemActive] = useState(false)

  useEffect(() => {
    const timer1 = null

    if (showSlideItems && !itemActive) {
      setTimeout(() => setItemActive(true), 1000)
    }

    return () => {
      clearTimeout(timer1)
    }
  }, [showSlideItems])

  return (
    <SlideItemsWrapper runAnimation={showSlideItems}>
      {slideData.map(slide => (
        <SlideItem
          key={slide.id}
          slide={slide}
          className={`${
            itemActive && slide.id === activeSlide.id ? "active" : ""
          } slide_${slide.id}`}
          onClick={() => setActiveSlide(slide)}
        />
      ))}
    </SlideItemsWrapper>
  )
}
