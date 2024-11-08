import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import * as types from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FloatingImgWrapper = styled.div`
  width: ${({ width }) => width};
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex || 1};
  opacity: 1;
  transform: translateY(0px);
  animation: ${({ bottom }) => (bottom ? "floatBottom" : "floatTop")} 6s
    ease-in-out infinite;
  transition: all linear 0.25s;

  @keyframes floatTop {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes floatBottom {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

export const FloatingShape = ({ image, animation, ...restProps }) => {
  return (
    <FloatingImgWrapper {...restProps}>
      <GatsbyImage image={getImage(image)} alt="Floating shape image"/>
    </FloatingImgWrapper>
  )
}

FloatingShape.propTypes = {
  width: types.string.isRequired,
  top: types.string,
  right: types.string,
  left: types.string,
  bottom: types.string,
  zIndex: types.number,
  image: types.object.isRequired,
}
