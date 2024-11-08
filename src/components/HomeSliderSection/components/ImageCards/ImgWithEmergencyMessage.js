import React from "react"
import * as types from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { v4 as uuid } from "uuid"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { default as mixins } from "../../../../styles/mixins"
import { AlarmEmergencyMessage } from "./AlarmEmergencyMessage"
import { FloatingShape } from "./FloatingShape"
import { size } from "../../../../styles"
import styled, { keyframes, css } from "styled-components"

const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;

  @media (max-width: ${size.tablet}px) {
    position: relative;
  }
`

const MessageContainer = styled.div`
  ${mixins.positionAbsolute("22%", null, null, "-10%")};
  width: 75%;
  animation: messageFadeInAnim 1s linear;

  @keyframes messageFadeInAnim {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media (max-width: ${size.tablet}px) {
    left: -35%;
    width: 100%;
  }
`

export const ImgWithEmergencyMessage = ({ slide, isActive, ...restProps }) => (
  <ImgWrapper
    key={slide.id}
    className={`${isActive ? "isActive" : ""} slideItem`}
    {...restProps}
  >
    <ImgComponent slide={slide} />
    {isActive && (
      <MessageContainer key={uuid()}>
        <AlarmEmergencyMessage />
      </MessageContainer>
    )}
  </ImgWrapper>
)

ImgWithEmergencyMessage.propTypes = {
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
        sectionImage: file(relativePath: { eq: "slider/slide-screen2.png" }) {
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
          relativePath: { eq: "slider/slide-triangle.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 182
              placeholder: NONE
              formats: [PNG]
              quality: 70
            )
          }
        }

        floatingShapeBottom: file(
          relativePath: { eq: "slider/slide-black-cube.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 83
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
