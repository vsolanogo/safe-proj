import React from "react"
import * as types from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import audioWaveAnimation from "../../../../assets/animations/audio_wave.json"
import { default as mixins } from "../../../../styles/mixins"
import { FloatingShape } from "./FloatingShape"
import { size } from "../../../../styles"
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
  ${mixins.positionAbsolute(null, "30%", "15%")};
`

export const ImgWithAudioWave2 = ({ slide, isActive, ...restProps }) => (
  <ImgWrapper
    key={slide.id}
    className={`${isActive ? "isActive" : ""} slideItem`}
    {...restProps}
  >
    <ImgComponent slide={slide} />
    {isActive && (
      <LottieContainer
        animationData={audioWaveAnimation}
        width="60%"
        height="20%"
        renderType="svg"
      />
    )}

    {/* <video
      preload="auto"
      css={`
        position: absolute;
        right: 30%;
        bottom: 15%;
        width: 60%;
        height: 20%;
      `}
      autoPlay
      loop
      muted
    >
      <source src={audioWaveVideo} type="video/mp4" />
    </video> */}
  </ImgWrapper>
)

ImgWithAudioWave2.propTypes = {
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
        sectionImage: file(relativePath: { eq: "slider/slide-screen4.png" }) {
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
          relativePath: { eq: "slider/slide-black-cube.png" }
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
          relativePath: { eq: "slider/slide-tube.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 148
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
