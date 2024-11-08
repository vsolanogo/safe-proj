import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { size } from "../../../../styles"
import { getRem } from "../../../../utils"
import { SlideItem } from "./SlideItem"
import { slideData } from "../../dataHelpers/sliderData"
import { ImagesSection } from "./ImagesSection"
import { useInView } from "react-intersection-observer"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: ${getRem(30)};
  margin-bottom: ${getRem(30)};
  z-index: 10;
  
  @media (max-width: ${size.tablet}px) {
    flex-direction: column;
    margin-top: 0;
  }
`

const LeftSection = styled.ul`
  width: 50%;
  
  @media (max-width: ${size.tablet}px) {
    width: 100%;
    order: 2;
    margin-top: 25px;
  }
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 100%;
  min-height: 606px;
  max-height: 606px;

  @media (max-width: ${size.tablet}px) {
    width: 100%;
    min-height: 406px;
    max-height: 406px;
    order: 1;
    margin-bottom: ${getRem(40)};
    margin-top: ${getRem(40)};
  }
`

export const Slider = () => {
  let intervalID = null

  const [activeSlide, setActiveSlide] = useState(slideData[0])
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    intervalID && clearInterval(intervalID)

    if (inView) {
      intervalID = setInterval(() => {
        const currentActiveSlideIndex = slideData.findIndex(
          (slide) => slide.id === activeSlide.id
        )

        let nextSlideIndex =  0
        if ((currentActiveSlideIndex + 1) <= (slideData.length - 1)) {
          nextSlideIndex = currentActiveSlideIndex + 1
        }

        setActiveSlide(slideData[nextSlideIndex]);
      }, 3000)
    }

    return (() => clearInterval(intervalID))
  }, [inView, activeSlide])

  return (
    <Wrapper ref={ref}>
      <LeftSection>
        {slideData.map((slide, index) => (
          <SlideItem
            key={slide.id}
            title={slide.title}
            text={slide.text}
            showStep={index !== (slideData.length - 1)}
            slideCount={index + 1}
            isActive={slide.id === activeSlide.id}
            onClick={() => setActiveSlide(slide)}
          />
        ))}
      </LeftSection>
      <RightSection>
        <ImagesSection activeSlide={activeSlide}/>
      </RightSection>
    </Wrapper>
  )
}