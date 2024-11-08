import React from "react"
import * as types from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import audioWaveAnimation from "../../../../assets/animations/audio_wave.json"
import { size, theme } from "../../../../styles"
import { default as mixins } from "../../../../styles/mixins"
import { FloatingShape } from "./FloatingShape"
import { getRem } from "../../../../utils"
import { LottieComponent } from "../../../Lottie/Lottie"
import styled, { keyframes, css } from "styled-components"
import audioWaveVideo from "../../../../assets/videos/sound.mp4"

const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;

  @media (max-width: ${size.tablet}px) {
    position: relative;
  }
`

const LottieContainer = styled(LottieComponent)`
  width: 50%;
  height: 16%;
  ${mixins.positionAbsolute(null, "31%", "7.5%")};

  @media (max-width: ${size.tablet}px) {
    ${mixins.positionAbsolute(null, "31%", "7.5%")};
  }
`

const LiveText = styled.div`
  ${mixins.positionAbsolute(null, "24%", "17.7%")};
  width: 74px;
  box-shadow: ${theme.boxShadows.liveBtn};
  border-radius: 14.8px;
  font-family: RobotoBold, sans-serif;
  text-transform: uppercase;
  color: var(--white-color);
  background-color: var(--reddarken-color);
  padding: 7.04px 8.16px 7.04px 27.82px;
  animation: show 1.5s linear;
  z-index: 10;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:before {
    content: "";
    ${mixins.positionAbsolute("50%", null, null, "10px")};
    transform: translateY(-50%);
    width: 11.84px;
    height: 11.84px;
    background-color: var(--white-color);
    border-radius: 50%;
  }

  @media (max-width: ${size.tablet}px) {
    width: 50px;
    font-size: ${getRem(10)};
    padding: 5.04px 8.16px 5.04px 22.82px;

    &:before {
      width: 8px;
      height: 8px;
    }
  }
`

export const ImgWithAudioWave = ({ slide, isActive, ...restProps }) => (
  <ImgWrapper
    key={slide.id}
    className={`${isActive ? "isActive" : ""} slideItem`}
    {...restProps}
  >
    <ImgComponent slide={slide} />
    {isActive && <LiveText>Live</LiveText>}
    {isActive && (
      <LottieContainer animationData={audioWaveAnimation} renderType="svg" />

      // <video
      //   preload="auto"
      //   css={`
      //     width: 50%;
      //     height: 16%;
      //     position: absolute;
      //     right: 31%;
      //     bottom: 7.5%;
      //   `}
      //   autoPlay
      //   loop
      //   muted
      // >
      //   <source src={audioWaveVideo} type="video/mp4" />
      // </video>
    )}
  </ImgWrapper>
)

ImgWithAudioWave.propTypes = {
  slide: types.object.isRequired,
  isActive: types.bool.isRequired,
}

const ImagesComponent = ({ images, slide }) => (
  <>
    <FloatingShape
      width={slide.shapes.topShape.width}
      top={slide.shapes.topShape.top}
      left={slide.shapes.topShape.left}
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
      right={slide.shapes.bottomShape.right}
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
        sectionImage: file(relativePath: { eq: "slider/slide-screen3.png" }) {
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
              width: 133
              placeholder: NONE
              formats: [PNG]
              quality: 70
            )
          }
        }

        floatingShapeBottom: file(
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
      }
    `}
    render={images => <ImagesComponent images={images} {...props} />}
  />
)
