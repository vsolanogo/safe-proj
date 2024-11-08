import React from "react"
import styled, { keyframes, css } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { useInView } from "react-intersection-observer"

import SectionBg from "../../assets/svg/ellipses-bg.inline.svg"
import { size } from "../../styles"
import { getRem } from "../../utils"
import { device } from "../../styles"
import { CardsContainer } from "./components/ContentCards"

const SectionWithEllipsesWrapper = styled.div`
  overflow: hidden;
  overflow-x: hidden;

  position: relative;
  background-color: transparent;
  @media (max-width: ${size.tablet}px) {
    overflow: visible;
  }
`

const a1 = keyframes`
  0% {
    filter: opacity(0);
    transform: scale(0.7);
  }

  100% {
    filter: opacity(1);
    transform: scale(1);
  }
`

const BackgroundImage = styled.div`
  filter: opacity(0);
  transform: scale(-1);
  position: absolute;
  width: 1474px;
  top: -23%;
  right: calc(50% - 725px);
  overflow: visible;
  z-index: -2;

  @media (max-width: ${size.tablet}px) {
    width: 100%;
    top: 0;
    right: 0;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    .sectionBg {
      height: 100%;
      transform: scale(2.5);
    }
  }

  animation-fill-mode: forwards;
  animation-direction: ease-in;
  animation-duration: 2000ms;
  animation-delay: 1100ms;
  animation-play-state: paused;
  animation-name: ${a1};

  @media (max-width: ${size.tablet}px) {
    top: ${getRem(30)};
  }

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const InnerBlock = styled.div`
  margin: 0 0.5rem;

  @media ${device.mobileL} {
    margin: 0 3.5rem;
  }

  @media ${device.laptopL} {
    max-width: 71rem;
    margin: 0 auto;
  }

  padding-top: 1.875rem;

  @media ${device.tablet} {
    padding-top: 3.75rem;
  }

  height: 100%;
  position: relative;
  min-height: 1022px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.875rem;

  .sectionBg {
    width: 100%;
  }

  @media ${device.tablet} {
    padding-bottom: 3.75rem;
  }

  @media (max-width: ${size.tablet}px) {
    min-height: 600px;
    flex-direction: column;

    .sectionBg {
      position: relative;
      right: 10px;
    }
  }
`

const ButtonWrapper = styled.div`
  @media (max-width: ${size.tablet}px) {
    height: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  animation-fill-mode: forwards;
  animation-direction: ease-in;
  animation-duration: 1500ms;
  animation-play-state: paused;
  animation-name: ${a1};

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const scaling = keyframes`
  0% {
    transform: scale(0.85);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.85);
  }
`

const GatsbyImageSosafe = styled(GatsbyImage)`
  width: 272px;
  height: 272px;
  position: absolute;
  top: calc(50% - 136px);
  right: calc(50% - 136px);

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptopS}px) {
    width: 230px;
    height: 230px;
    top: calc(50% - 118px);
    right: calc(50% - 125px);
  }

  @media (max-width: 767px) {
    width: 172px;
    height: 172px;
    position: absolute;
    top: calc(50% - 85px);
    right: calc(50% - 83px);
  }

  overflow: visible !important;
  filter: drop-shadow(10px 31px 23px rgba(0, 0, 0, 0.15));

  @media (max-width: ${size.tablet}px) {
    position: relative;
    top: unset;
    right: unset;
  }
`

const SPulseWrapper = styled.div`
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-fill-mode: none;
  animation-iteration-count: infinite;
  animation-duration: 3500ms;
  animation-name: ${scaling};
  animation-play-state: paused;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const Component = React.memo(
  ({ imgs }) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 })

    return (
      <SectionWithEllipsesWrapper ref={ref}>
        <InnerBlock>
          <BackgroundImage data-runanim={inView}>
            <SectionBg className="sectionBg" />
          </BackgroundImage>

          <ButtonWrapper data-runanim={inView}>
            <SPulseWrapper data-runanim={inView}>
              <GatsbyImageSosafe
                image={getImage(imgs.btnImg)}
                alt="SoSafe button image"
              />
            </SPulseWrapper>
          </ButtonWrapper>

          <CardsContainer inView={inView} />
        </InnerBlock>
      </SectionWithEllipsesWrapper>
    )
  },
  () => true
)

export const HomeSectionWithRadar = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          btnImg: file(relativePath: { eq: "slider/button-image.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 270
                placeholder: NONE
                formats: [PNG]
                quality: 70
              )
            }
          }
        }
      `}
      render={imgs => <Component imgs={imgs} {...props} />}
    />
  )
}
