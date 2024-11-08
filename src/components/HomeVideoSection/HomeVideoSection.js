import React from "react"
// import Sticky from "react-sticky-el"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { useInView } from "react-intersection-observer"
import styled, { keyframes, css } from "styled-components"
import { useFormatMessage } from "../../hooks"
import { device, size } from "../../styles"
import { VideoSection } from "./components/VideoSection"
import { InfoCards } from "./components/InfoCards"
// styles
import { typographyCss } from ".."
import { subtitleCss, titleCss } from "./styles/titleAndSubtitle"
import { videoContainerCss } from "./styles/videoContainer"
import Sticky from "react-stickynode"
import { createGlobalStyle } from "styled-components"

const a1 = keyframes`
  0% {
    transform: rotate(180deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
`

const a3 = keyframes`
  0% {
    transform: translateX(30vw);
  }
  
  100% {
    transform: translateX(0vw);
  }
`

const slideInRightMobile = keyframes`
  0% {
    transform: translateX(400px) translateY(0) rotate(180deg);
  }

  100% {
    transform: translateX(0) translateY(0) rotate(0);
  }
`

const AnimWrapperRollinGatsbyImage = styled(GatsbyImage)`
  overflow: visible !important;

  img {
    transform: rotate(180deg);
    animation: ${a1};
    animation-duration: 2000ms;
    animation-direction: ease-out;
    animation-fill-mode: forwards;
    animation-play-state: paused;
    width: 378px !important;
    height: 378px !important;
    left: -189px !important;

    @media (max-width: 1000px) {
      width: 280px !important;
      height: 280px !important;
      left: -140px !important;
    }

    &[data-inview="true"] {
      animation-play-state: running;
    }
  }
`

const a4 = keyframes`
  0% {
    transform: rotate(180deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
`

const ImageInModernSticky = styled(GatsbyImage)`
  overflow: visible !important;

  img {
    transform: rotate(180deg);
    animation: ${a4};
    animation-duration: 2000ms;
    animation-direction: ease-out;
    animation-fill-mode: forwards;
    animation-play-state: paused;
    width: 378px !important;
    height: 378px !important;
    left: -189px !important;

    @media (max-width: 1000px) {
      width: 280px !important;
      height: 280px !important;
      left: -140px !important;
    }

    &[data-inview="true"] {
      animation-play-state: running;
    }
  }
`

const RollingButtonWrapper = styled.div`
  top: -50px;
  right: 0;
  transform: translateX(400px) translateY(0) rotate(180deg);
  animation: ${slideInRightMobile};
  will-change: transform;
  animation-duration: 2000ms;
  animation-direction: ease-out;
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 172px;
  position: absolute !important;
  overflow: visible !important;
  width: 172px;
  animation-play-state: paused;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const AnimWrapperRollinGatsbyImageMobile = styled(GatsbyImage)`
  width: 100%;
  @media (min-width: 771px) {
    display: none !important;
  }
  img {
    width: 172px !important;
    height: 172px !important;
  }
`

const SectionWrapper = styled.div`
  width: 100vw;
  position: relative;

  @media (max-width: ${size.tablet}px) {
    background-color: #000;
    overflow: visible;
  }
`

const SectionS = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.5rem;

  @media ${device.mobileL} {
    margin: 0 3.5rem;
  }

  @media ${device.laptopL} {
    max-width: 71rem;
    margin: 0 auto;
  }

  height: auto;
  padding-top: 1.875rem;
  position: relative;

  @media ${device.tablet} {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  min-height: 800px;
  padding-bottom: 1.875rem;

  @media (max-width: 600px) {
    padding-top: 9.68rem;
  }
  width: 100vw;

  @media (max-width: 1230px) {
    margin-left: 0 !important;
    padding-left: 3.5rem !important;
  }
`

const a2 = keyframes`
  0% {
    transform: translateY(20px);
    filter: opacity(0);
  }
  50% {
    transform: translateY(20px);
    filter: opacity(0);
  }
  100% {
    transform:translateY(0px);
    filter: opacity(1);
  }
`

const TitleS = styled.h3`
  ${typographyCss};
  ${titleCss};
  animation: ${a2} 1700ms ease-in;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  color: #fff;

  &[data-inview="true"] {
    animation-play-state: running;
  }
`

const Subtitle = styled.div`
  ${subtitleCss};
  animation: ${a2} 1700ms ease-in;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  will-change: transform, filter;

  &[data-run="true"] {
    animation-play-state: running;
  }
`

const VideoContainer = styled.div`
  ${videoContainerCss};
  transform: translateX(-100vw);
  filter: opacity(0);
  transition: all 2000ms linear;

  &[data-run="true"] {
    filter: opacity(1);
    transform: translateX(0vw);
  }
`

const SRollingImageDesktop = styled.div`
  position: absolute;
  right: 10px;
  height: 40%;
  width: 100%;
  max-width: 20px;

  @media (max-width: 770px) {
    display: none;
  }

  .sticky-inner-wrapper {
    height: 1px !important;
  }

  @supports (position: sticky) {
    display: none;
  }
`

const SModernStickyWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 85%;
  width: 5em;

  animation: ${a3};
  animation-duration: 2000ms;
  animation-direction: ease-out;
  animation-fill-mode: forwards;
  animation-play-state: paused;

  &[data-inview="true"] {
    animation-play-state: running;
  }

  @supports not (position: sticky) {
    display: none;
  }

  @media (max-width: 770px) {
    display: none;
  }
`

const SModernSticky = styled.div`
  position: sticky;
  width: 100%;
  height: 378px;
  top: calc((100vh - 378px) / 2);
  width: 1px;
  position: sticky;
  margin: 0;
  left: 0;

  @supports not (position: sticky) {
    display: none;
  }
`

const SRollingImageDesktopInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1px;
  transform: translateX(30vw);
  animation: ${a3};
  animation-play-state: paused;
  animation-duration: 2000ms;
  animation-direction: ease-out;
  animation-fill-mode: forwards;

  &[data-inview="true"] {
    animation-play-state: running;
  }
`

const RollingImageMobile = React.memo(
  ({ imgs, inView }) => (
    <RollingButtonWrapper data-runanim={inView}>
      <AnimWrapperRollinGatsbyImageMobile
        image={getImage(imgs.ButtonImage)}
        alt={"ButtonImage"}
        loading={"eager"}
      />
    </RollingButtonWrapper>
  ),

  (prev, next) => prev.inView === next.inView
)

const RollingImageDesktop = ({ inView, imgs }) => (
  <SRollingImageDesktop id="importantStickyBoundaryButtonImage">
    <Sticky
      top="#importantStickyBoundaryButtonImage"
      bottomBoundary="#importantStickyBoundaryButtonImage"
    >
      <SRollingImageDesktopInner data-inview={inView}>
        <AnimWrapperRollinGatsbyImage
          image={getImage(imgs.ButtonImage)}
          alt={"ButtonImage"}
          loading={"eager"}
          data-inview={inView}
        />
      </SRollingImageDesktopInner>
    </Sticky>
  </SRollingImageDesktop>
)

const SafariBs = createGlobalStyle`
    body{
      overflow-x: hidden !important;
    }
`

const Component2 = ({ imgs }) => {
  const f = useFormatMessage()

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <>
      <SectionWrapper ref={ref}>
        <SectionS>
          <VideoContainer data-run={inView}>
            <VideoSection />
          </VideoContainer>

          <TitleS align="left" data-inview={inView}>
            <span>{f("home.videoSection.title.part1")}</span>
            <br />
            <span>{f("home.videoSection.title.part2")}</span>
          </TitleS>

          <Subtitle data-run={inView}>
            {f("home.videoSection.subTitle", {
              companyName: <span>{f("companyName")}</span>,
            })}
          </Subtitle>

          <InfoCards runAnimation={inView} />

          <SModernStickyWrapper data-inview={inView}>
            <SModernSticky>
              <ImageInModernSticky
                image={getImage(imgs.ButtonImage)}
                alt={"ButtonImage"}
                loading={"eager"}
                data-inview={inView}
              />
            </SModernSticky>
          </SModernStickyWrapper>

          <RollingImageDesktop inView={inView} imgs={imgs} />
          <RollingImageMobile imgs={imgs} inView={inView} />
        </SectionS>
      </SectionWrapper>
    </>
  )
}

const ComponentWrapper = styled.div`
  width: 100vw;
`

const Component = ({ imgs }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0 })

  return (
    <ComponentWrapper ref={ref}>
      {!inView && <SafariBs />}
      <Component2 imgs={imgs} />
    </ComponentWrapper>
  )
}

export const HomeVideoSection = React.memo(
  props => (
    <StaticQuery
      query={graphql`
        query {
          ButtonImage: file(relativePath: { eq: "slider/button-image.png" }) {
            id
            name
            absolutePath
            relativePath
            publicURL
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 378
                formats: [PNG]
                quality: 70
                placeholder: NONE
              )
            }
          }
        }
      `}
      render={imgs => <Component {...props} imgs={imgs} />}
    />
  ),
  () => true
)
