import React from "react"
import Img from "gatsby-image"
import * as types from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { FloatingShape } from "./FloatingShape"
import { size } from "../../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled, { keyframes, css } from "styled-components"

const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;

  @media (max-width: ${size.tablet}px) {
    position: relative;
  }
`

export const ImgWithMap = ({ slide, isActive, ...restProps }) => (
  <ImgWrapper
    key={slide.id}
    className={`${isActive ? "isActive" : ""} slideItem`}
    {...restProps}
  >
    <ImgComponent slide={slide} />
  </ImgWrapper>
)

ImgWithMap.propTypes = {
  slide: types.object.isRequired,
  isActive: types.bool.isRequired,
}

const ImagesComponent = ({ images, slide }) => (
  <>
    <FloatingShape
      width={slide.shapes.topShape.width}
      top={slide.shapes.topShape.top}
      right={slide.shapes.topShape.right}
      zIndex={slide.shapes.topShape.zIndex}
      image={images.floatingShapeTop}
    />
    <GatsbyImage
      image={getImage(images.sectionImage)}
      alt="Phone image"
      css={`
        width: 100%;
      `}
    />
    <FloatingShape
      width={slide.shapes.bottomShape.width}
      bottom={slide.shapes.bottomShape.bottom}
      left={slide.shapes.bottomShape.left}
      zIndex={slide.shapes.bottomShape.zIndex}
      image={images.floatingShapeBottom}
    />
  </>
)

ImagesComponent.propTypes = {
  slide: types.object.isRequired,
  images: types.object.isRequired,
}

const ImgComponent = props => (
  <StaticQuery
    query={graphql`
      query {
        sectionImage: file(relativePath: { eq: "slider/slide-screen1.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 424
              placeholder: NONE
              formats: [PNG]
              quality: 70
            )
          }
        }

        floatingShapeTop: file(
          relativePath: { eq: "slider/slide-light-cube.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              placeholder: NONE
              formats: [PNG]
              quality: 70
            )
          }
        }

        floatingShapeBottom: file(
          relativePath: { eq: "slider/slide-tube.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 100
              placeholder: NONE
              formats: [PNG]
              quality: 70
            )
          }
        }
      }
    `}
    render={images => <ImagesComponent images={images} {...props} />}
  />
)
