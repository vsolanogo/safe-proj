import React from "react"
import styled, { css } from "styled-components"
import * as types from "prop-types"

import { fadeInElemBottom, size } from "../../../../styles"
import { slideData } from "../../dataHelpers/sliderData"
import { default as mixins } from "../../../../styles/mixins"

const ImgWrapper = styled.div`
  display: block;
  width: 75%;
  top: 35px; 
  right: 0;
  position: absolute;
  opacity: 0;
  transform: translateY(20px);
  animation: ${({ runAnimation }) => 
          runAnimation 
                  ? css`${fadeInElemBottom}`
                  : css``};
  animation-fill-mode: forwards;
  animation-duration: 1500ms;
  animation-direction: linear;
  animation-delay: 1s;
  
  .slideItem {
    opacity: 0;
    transform: scale(.85);
    transition: all linear .4s;
    will-change: transform;
    z-index: -1;
    
    &.isActive {
      opacity: 1;
      transform: scale(1);
      z-index: 1;
    }
  }
  
  @media (max-width: ${size.tablet}px) {
    width: 100%;
    right: -25px;
  }
  
  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    right: -20px;
    top: 45px;
    transform: translateY(-50%);
    width: 85%;
  }
  
  @media (min-width: ${size.laptop}px) and (max-width: ${size.laptopL}px) {
    right: -45px;
  }
`

export const ImagesBlock = ({ activeSlide, showSlideItems }) => (
  <ImgWrapper
    runAnimation={showSlideItems}
  >
    {slideData.map(slide => {
      const { component: Component } = slide

      return (
        <Component
          key={slide.id}
          slide={slide}
          isActive={activeSlide.id === slide.id}
        />
      )
    })}
  </ImgWrapper>
)

ImagesBlock.propTypes = {
  activeSlide: types.shape({
    id: types.number,
    title: types.string,
    text: types.string,
    image: types.string,
  }).isRequired,
  showSlideItems: types.bool.isRequired,
}