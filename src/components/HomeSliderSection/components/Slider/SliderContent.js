import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { default as mixins } from "../../../../styles/mixins"
import { SlideInButton } from "../SlideInButton/SlideInButton"
import { slideData } from "../../dataHelpers/sliderData"
import { ImagesBlock } from "../ImageCards/ImagesBlock"
import { size } from "../../../../styles"
import { SlideItemsView } from "./SlideItemsView"
import { useInterval } from "react-hookedup"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  position: relative;
  width: 100%;
  height: 735.64px;
  margin-top: 96px;

  @media (max-width: ${size.tablet}px) {
    flex-direction: column;
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    height: 610.64px;
  }

  @media (min-width: ${size.laptop}px) and (max-width: ${size.laptopL}px) {
    height: 635.64px;
    margin-bottom: 90px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(50% - 20px / 2);
  height: 100%;
  margin: 0 20px 0 0;
  z-index: 10;

  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const RightContent = styled.div`
  width: calc(50% - 20px / 2);
  height: 100%;
  position: relative;

  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    ${mixins.displayFlex("row", "center", "center")};
  }
`

export const SliderContent = ({ isInView, width }) => {
  const [activeSlide, setActiveSlide] = useState(slideData[0])
  const [showSlideItems, setShowSlideItems] = useState(false)

  useInterval(() => {
    if (!isInView) {
      return
    }

    const currentActiveSlideIndex = slideData.findIndex(
      slide => slide.id === activeSlide.id
    )

    let nextSlideIndex = 0
    if (currentActiveSlideIndex + 1 <= slideData.length - 1) {
      nextSlideIndex = currentActiveSlideIndex + 1
    }

    setActiveSlide(slideData[nextSlideIndex])
  }, 5000)

  useEffect(() => {
    if (width > size.tablet && width <= size.laptop) {
      setShowSlideItems(true)
    }
  }, [width])

  return (
    <Wrapper>
      <LeftContent>
        <SlideInButton
          setShowSlideItems={setShowSlideItems}
          showSlideItems={isInView}
          activeSlide={activeSlide}
          isInView={isInView}
          setActiveSlide={setActiveSlide}
        />
        <SlideItemsView
          activeSlide={activeSlide}
          showSlideItems={isInView}
          setActiveSlide={setActiveSlide}
          width={width}
        />
      </LeftContent>
      <RightContent>
        <ImagesBlock activeSlide={activeSlide} showSlideItems={isInView} />
      </RightContent>
    </Wrapper>
  )
}
