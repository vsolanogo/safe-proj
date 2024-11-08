import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import styled, { keyframes, css } from "styled-components"
import VisibilitySensor from "react-visibility-sensor"
import ShieldIcon from "../../../assets/svg/shield-check.inline.svg"
import ServerIcon from "../../../assets/svg/server.inline.svg"
import { CardWithImage } from "./CardWithImage"
import { ServerLottie } from "./ServerLottie"
import { typographyCss } from "../../atoms/typography"
import { useFormatMessage } from "../../../hooks"
import { size } from "../../../styles/helpers"
import { getRem } from "../../../utils"

const a1 = keyframes`
  0% {
    filter: opacity(0);
    transform: translateY(20px)
  }

  100% {
    filter: opacity(1);
    transform: translateY(0px)
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  margin-top: ${getRem(56)};

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptopL}px) {
    width: 80%;
    max-width: 570px;
  }

  @media (min-width: 600px) and (max-width: ${size.tablet}px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const SLottieBlock = styled.div`
  background-color: rgb(19, 19, 19);
  display: flex;
  align-items: center;
  width: 100%;
  padding: 22px 43px 22px 20px;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 22px 25px;
    max-width: 280px;
  }
`

const TitleS = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 0;
  ${typographyCss};
`

const TextS = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  margin-bottom: 0;
  ${typographyCss};
`

const LottieWrapper2 = styled.div`
  position: relative;
  max-width: 12em;
  > div {
    width: 12em;
    height: 12em;
  }
  canvas {
    overflow: visible;
  }

  &:before {
    left: 5em;
    content: "";
    position: absolute;
    width: 2.1em;
    height: 2.1em;
    background-color: #232333;
    border-radius: 3px;
    transform: rotate(45deg) skew(-15deg, -15deg);
    bottom: 3em;
    z-index: 2;
  }
`

const LottieWrapper = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transform: translateY(-2em);
  border: 1;

  @media (min-width: 641px) {
    height: 1px;
    max-width: 280px;
  }
`

const PopupAnim = styled.div`
  filter: opacity(0);
  transform: translatey(20px);
  animation: ${a1};
  animation-play-state: paused;
  animation-fill-mode: forwards;
  animation-direction: ease-out;
  animation-duration: 1000ms;
  animation-delay: 1700ms;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

export const InfoCards = () => {
  const [inView, setInView] = useState(false)
  const f = useFormatMessage()

  return (
    <>
      <VisibilitySensor
        partialVisibility={true}
        minTopValue={150}
        onChange={e => {
          if (!inView && e) {
            setInView(true)
          }
        }}
      >
        <PopupAnim data-runanim={inView}>
          <CardsWrapper>
            <ImgComponent runAnimation={inView} />

            <SLottieBlock>
              <LottieWrapper>
                <LottieWrapper2>
                  <ServerLottie />
                </LottieWrapper2>
              </LottieWrapper>

              <div
                css={`
                  max-width: 24em;
                  margin-left: 1em;
                `}
              >
                <TitleS as="h5" lineHeight={32} color={"#fff"}>
                  {f("home.section2.card.convenience")}
                </TitleS>
                <TextS size={13} lineHeight={21} color={"#fff"}>
                  {f("home.section2.card.convenience.text")}
                </TextS>
              </div>
            </SLottieBlock>
          </CardsWrapper>
        </PopupAnim>
      </VisibilitySensor>
    </>
  )
}
const ImagesComponent = ({ images, runAnimation }) => (
  <>
    <CardWithImage
      image={images.cardImage1.childImageSharp}
      title={"home.section2.card.trust"}
      text={"home.section2.card.trust.text"}
      icon={ShieldIcon}
      runAnimation={runAnimation}
    />
    <CardWithImage
      image={images.cardImage2.childImageSharp}
      title={"home.section2.card.emergencyHelp"}
      text={"home.section2.card.emergencyHelp.text"}
      icon={ServerIcon}
      runAnimation={runAnimation}
      animationDelay={"1800ms"}
    />
  </>
)

const ImgComponent = ({ runAnimation }) => (
  <StaticQuery
    query={graphql`
      query {
        cardImage1: file(relativePath: { eq: "cards/card-image-1.png" }) {
          childImageSharp {
            fluid(pngCompressionSpeed: 1, maxWidth: 280, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        cardImage2: file(relativePath: { eq: "cards/card-image-2.png" }) {
          childImageSharp {
            fluid(pngCompressionSpeed: 1, maxWidth: 280, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={images => (
      <ImagesComponent images={images} runAnimation={runAnimation} />
    )}
  />
)
