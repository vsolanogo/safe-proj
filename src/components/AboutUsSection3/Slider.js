import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { getRem } from "../../utils"
import { CardWithMedia } from "./CardWithMedia"
import { device } from "../../styles"

const Wrapper = styled.div`
  position: relative;
  width: 100vw;

  .slick-list {
    overflow: visible;

    // hide all slide before first slide
    ${({ lengthCarousel }) => {
      let hideIndex = []
      for (let i = 1; i < lengthCarousel - 1; i++) {
        hideIndex.push(`[data-index="-${i}"]`)
      }

      return `${hideIndex.join(", ")} {
      opacity: 0;
    }`
    }}
  }
`

const Overlay = styled.div`
  height: 100%;
  width: ${getRem(421)};
  background: linear-gradient(
    270deg,
    #ffffff 18.01%,
    rgba(255, 255, 255, 0) 72.82%
  );
  position: absolute;
  z-index: 99;
  top: 0;
  right: calc((100vw - 1136px - 109px) / 2);
`

const Dots = styled.ul`
  position: relative;
  padding-top: 25px;
  right: 51px;
  bottom: 0;

  @media ${device.laptopL} {
    right: calc((100vw - 1136px) / 2);
  }

  li button {
    ::before {
      font-size: 10px;
    }
  }
`

export const CustomSlider = ({ content }) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    variableWidth: true,

    appendDots: dots => {
      return <Dots> {dots} </Dots>
    },
  }

  return (
    <Wrapper lengthCarousel={content.length}>
      <Slider {...settings}>
        {content.map(el => (
          <CardWithMedia key={el.id} {...el} />
        ))}
      </Slider>
      <Overlay />
    </Wrapper>
  )
}
