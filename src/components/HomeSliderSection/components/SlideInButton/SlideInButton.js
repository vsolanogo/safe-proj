import React, { useEffect, useState } from "react"
import styled from "styled-components"
import * as types from "prop-types"
import { size } from "../../../../styles"
import { ButtonImageComponent } from "./ButtonImageComponent"
import { DotsComponent } from "./DotsComponent"

const Wrapper = styled.div`
  position: relative;
  width: 556px;
  height: 556px;
  transform: translateX(-400px);
  border-radius: 50%;
  background-color: var(--white-color);
  z-index: 2;
  will-change: background;

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    transform: translateX(-335px);
  }

  @media (min-width: 768px) and (max-width: 1025px) {
    display: none;
  }
`

export const SlideInButton = ({
  isInView,
  showSlideItems,
  setShowSlideItems,
  activeSlide,
  setActiveSlide,
}) => {
  const [buttonImageRotation, setButtonImageRotation] = useState(0)
  const [drawGrayCircle, setDrawGrayCircle] = useState(false)
  const [blueCircle, setBlueCircle] = useState(1400)

  useEffect(() => {
    if (showSlideItems) {
      switch (activeSlide.id) {
        case 1:
          setBlueCircle(954)
          setButtonImageRotation(0)
          break
        case 2:
          setBlueCircle(842)
          setButtonImageRotation(30)
          break
        case 3:
          setBlueCircle(722)
          setButtonImageRotation(70)
          break
        case 4:
          setBlueCircle(400)
          setButtonImageRotation(90)
          break
      }
    }
  }, [showSlideItems, activeSlide])

  const sequence = async () => {
    setDrawGrayCircle(true)
    await setShowSlideItems(true)
  }

  return (
    <Wrapper>
      <DotsComponent
        activeSlide={activeSlide}
        showSlideItems={showSlideItems}
        drawGrayCircle={drawGrayCircle}
        setActiveSlide={setActiveSlide}
        blueCircle={blueCircle}
      />
      <ButtonImageComponent
        inView={isInView}
        animationsSequence={sequence}
        buttonImageRotation={buttonImageRotation}
      />
    </Wrapper>
  )
}

SlideInButton.propTypes = {
  isInView: types.bool.isRequired,
  showSlideItems: types.bool.isRequired,
  setShowSlideItems: types.func.isRequired,
  setActiveSlide: types.func.isRequired,
  activeSlide: types.object.isRequired,
}
