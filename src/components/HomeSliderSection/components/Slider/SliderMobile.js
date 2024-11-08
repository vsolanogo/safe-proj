import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import * as types from "prop-types"
import { SlideItemMobile } from "./SlideItemMobile"
import { slideData } from "../../dataHelpers/sliderData"
import { default as mixins } from "../../../../styles/mixins"

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  animation: ${({ isInView }) =>
    isInView ? `fadeInFromBottom 2s linear` : "none"};

  .slideItem {
    max-width: 200px !important;
    display: block !important;
    margin: 50px auto 35px;
    right: -20px;
  }

  .slick-list {
    overflow: hidden;
  }

  @keyframes fadeInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 767px) {
    display: none;
  }
`

const Dots = styled.ul`
  position: relative;
  padding-top: 30px;
  ${mixins.displayFlex("row", "center", "center")};
  bottom: 0;

  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    overflow: hidden;

    button {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: var(--borderlight-color);
      font-size: 0;
      border: none;
    }

    &:not(last-child) {
      margin-right: 10px;
    }

    &.slick-active button {
      background-color: var(--darkfont-color);
    }
  }
`

export const SliderMobile = ({ isInView }) => {
  const [activeIndex, setActive] = useState(1)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    pauseOnFocus: true,
    pauseOnHover: true,

    appendDots: dots => {
      return <Dots> {dots} </Dots>
    },
    beforeChange: (oldIndex, newIndex) => {
      setActive(newIndex + 1)
    },
  }

  return (
    <Wrapper lengthCarousel={slideData.length} isInView={isInView}>
      <Slider {...settings}>
        {slideData.map(slide => {
          const { component: Component } = slide

          return (
            <div key={slide.id}>
              <Component slide={slide} isActive={activeIndex === slide.id} />
              <SlideItemMobile slide={slide} />
            </div>
          )
        })}
      </Slider>
    </Wrapper>
  )
}

SliderMobile.propTypes = {
  isInView: types.bool.isRequired,
}
