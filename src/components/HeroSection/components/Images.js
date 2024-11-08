import React from "react"
import styled, { css } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { imgProperties } from "../styles/styles"
import audioWaveVideo from "../../../assets/videos/sound.mp4"
import {
  GlowWrapperAnimation,
  PhoneScreensWrapperNewAnimation,
  ShadowWrapperAnimation,
} from "../animationKeyFrames/animationKeyFrames"

const GlowWrapper = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  filter: opacity(0);
  animation-play-state: paused;
  animation-name: ${GlowWrapperAnimation};
  animation-fill-mode: forwards;
  animation-direction: linear;
  animation-duration: 2300ms;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const SPhoneScreensWrapperNew = styled.div`
  position: absolute;
  ${imgProperties};
  width: 100%;
  height: 100%;
  z-index: 2;
  filter: opacity(0);
  transform: translateY(-5.5em);
  animation-play-state: paused;
  animation-name: ${PhoneScreensWrapperNewAnimation};
  animation-fill-mode: forwards;
  animation-direction: linear;
  animation-duration: 1700ms;
  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const ShadowWrapper = styled.div`
  position: absolute;
  ${imgProperties};
  width: 100%;
  height: 100%;
  z-index: 1;
  top: -1.43em;
  left: -1.43em;
  filter: opacity(0);
  animation-play-state: paused;
  animation-name: ${ShadowWrapperAnimation};
  animation-fill-mode: forwards;
  animation-direction: linear;
  animation-duration: 2200ms;

  @media (max-width: 767px) {
    top: -0.53em;
    left: -1.06em;
  }

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  width: ${({ width }) => (width ? width : 100)}%;
  z-index: ${({ zIndex }) => zIndex || 1};
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;

  display: block;
`

const ImageWrapperAppeared = styled.div`
  position: absolute;
  width: ${({ width }) => (width ? width : 100)}%;
  z-index: ${({ zIndex }) => zIndex || 1};
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
  display: block;
  filter: opacity(0);
  transition: all 0.2s;

  &[data-visible="true"] {
    filter: opacity(1);
  }
`

const StyledImgGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  pointer-events: none;
`

const SoundWavesWrapper = styled.div`
  position: absolute;
  left: 16em;
  top: 2em;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  transition: all 0.5s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  align-items: center;
  justify-content: center;
  filter: opacity(0);

  @media (max-width: 1200px) {
    left: 9.6em;
    top: 1.2em;
  }

  @media (max-width: 770px) {
    left: 8em;
    top: 1em;
  }

  &[data-visible="true"] {
    filter: opacity(1);
  }
`

const VideoWrapper = styled.div`
  width: 37%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 61px;
  transform: rotateX(-61deg) rotateY(15deg) rotateZ(-31deg) skewX(3deg)
    skewY(-5deg);

  @media (max-width: 841px) {
    height: 37px;
  }

  video {
    margin-top: -2px;
    width: 100%;
    transform: scale(1.5);
    position: absolute;
    z-index: 5555;
  }
`

const PhoneImagesContainer = styled.div`
  position: absolute;
  width: 62em;
  height: 46em;
  transform: translateX(21em) translateY(-4em);
  z-index: 1200;

  @media (max-width: 1200px) {
    width: 37em;
    height: 27em;
    transform: translateX(16.8em) translateY(-3.2em);
  }

  @media (max-width: 770px) {
    width: 31em;
    height: 23em;
    transform: translateX(10em) translateY(-6em);
  }
`

const Component = ({ imgs, hideSplash, drawEllipse }) => {
  const intl = useIntl()
  return (
    <PhoneImagesContainer>
      <GlowWrapper data-runanim={hideSplash}>
        <ImageWrapper zIndex={10}>
          <StyledImgGatsbyImage
            image={getImage(imgs.canvasGlowingForPhone)}
            alt="Phone glow"
            className="phone-images"
          />
        </ImageWrapper>
      </GlowWrapper>

      <SPhoneScreensWrapperNew data-runanim={hideSplash}>
        <ImageWrapper zIndex={9}>
          <StyledImgGatsbyImage
            image={getImage(imgs.canvasPhone1)}
            alt="Phone"
            className="phone-images"
          />
        </ImageWrapper>

        <ImageWrapperAppeared zIndex={10} data-visible={!drawEllipse}>
          <StyledImgGatsbyImage
            image={getImage(imgs.canvasHomeSWE)}
            alt="Phone"
            className="phone-images"
            loading={"eager"}
          />
        </ImageWrapperAppeared>

        {/* <ImageWrapper zIndex={7} showImg={intl.locale === "en"}>
            <StyledImgGatsbyImage
              image={getImage(imgs.canvasHomeENG)}
              alt="Phone"
              className="phone-images"
              loading={"eager"}
            />
          </ImageWrapper> */}

        <ImageWrapperAppeared zIndex={8} data-visible={drawEllipse}>
          <StyledImgGatsbyImage
            image={getImage(imgs.canvasAlarmSWE)}
            alt="Phone"
            className="phone-images"
            loading={"eager"}
          />
        </ImageWrapperAppeared>

        {/* <ImageWrapper zIndex={8} showImg={intl.locale === "en"}>
            <StyledImgGatsbyImage
              image={getImage(imgs.canvasAlarmENG)}
              alt="Phone"
              className="phone-images"
              loading={"eager"}
            />
          </ImageWrapper> */}

        <SoundWavesWrapper data-visible={drawEllipse}>
          <VideoWrapper>
            <video preload="auto" autoPlay loop muted playsinline>
              <source src={audioWaveVideo} type="video/mp4" />
            </video>
          </VideoWrapper>
        </SoundWavesWrapper>
      </SPhoneScreensWrapperNew>
      <ShadowWrapper data-runanim={hideSplash}>
        <ImageWrapper zIndex={1} width={106}>
          <StyledImgGatsbyImage
            image={getImage(imgs.canvasPhoneShadow)}
            alt="Phone shadow"
            className="phone-images"
          />
        </ImageWrapper>
      </ShadowWrapper>
    </PhoneImagesContainer>
  )
}

export const Images = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          canvasHomeSWE: file(relativePath: { eq: "canvas-home_SWE.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }

          canvasHomeENG: file(relativePath: { eq: "canvas-home_ENG.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }

          canvasAlarmSWE: file(relativePath: { eq: "canvas-alarm_SWE.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }

          canvasAlarmENG: file(relativePath: { eq: "canvas-alarm_ENG.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }

          canvasGlowingForPhone: file(
            relativePath: { eq: "canvas-glowing_for_phone.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }

          canvasPhoneShadow: file(
            relativePath: { eq: "canvas-phone_shadow.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }

          canvasPhone1: file(relativePath: { eq: "canvas-phone1.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                breakpoints: [300, 400, 500]

                quality: 100
              )
            }
          }
        }
      `}
      render={imgs => <Component imgs={imgs} {...props} />}
    />
  )
}
