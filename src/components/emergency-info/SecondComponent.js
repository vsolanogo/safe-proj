import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { SharedH1Nanotech, TextRoboto } from "../shared"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { Ellipses } from "../emergency-info/Ellipses"
import { isIOS } from "react-device-detect"
import { useFormatMessage } from "../../hooks"
import VisibilitySensor from "react-visibility-sensor"

const SButtonWrapper = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  top: 250px;
  left: calc(100vw / 2 * 1.6);
  bottom: 0;
  z-index: 100;
  overflow: visible;
`

const SGradientLeft = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 230px;
  right: calc(100vw / 2 * 0.3);
  bottom: 0;
  overflow: visible;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(12, 12, 12, 1) 10%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0) 91%,
    rgba(0, 0, 0, 0) 100%
  );

  transform: scaleX(1.7) scaleY(1.8) scaleZ(1) rotateX(-7deg) rotateY(2deg)
    rotateZ(0) translateX(-19%) translateY(-33%) translateZ(0) skewX(66deg)
    skewY(40deg);

  z-index: 20;

  @media (max-width: 1500px) {
    top: 370px;
  }

  @media (max-width: 900px) {
    top: 470px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const SGradientRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 29vw;
  min-height: 100%;
  z-index: 30;
  background: linear-gradient(
    to bottom left,
    #000000 19%,
    RGBA(0, 0, 0, 0) 50%,
    RGBA(0, 0, 0, 0) 100%
  );
`

const SContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin: auto;
  max-width: 80em;
  position: relative;
  width: 100%;
  z-index: 1235;

  transform: scaleZ(1.1) translateZ(0);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 2em;
  }
`

const SWrapper = styled.section`
  min-height: 500px;
  position: relative;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  display: flex;
  background: transparent;
  z-index: 77;
`

const pulseAnim = keyframes`
  0% {
    transform: scale(0.33);
    filter: opacity(1);
  }
  50% {
    transform: scale(10);
    filter: opacity(0.5);
  }
  100% {
    transform: scale(30);
    filter: opacity(0);
  }
`

const PulsatingShape = styled.div`
  width: 200px;
  height: 200px;
  left: -100px;
  top: -100px;
  position: absolute;
  background-color: var(--cyan-color);
  border-radius: 50%;
  opacity: 0.22;
  transform-origin: center center;
  animation-name: ${pulseAnim};
  animation-fill-mode: forwards;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: paused;

  transform: translatex(-50%) translatey(-50%);

  @media (max-width: 1200px) {
    transform: unset;
    top: unset;
    bottom: -350px;
  }

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const Component = ({ imgs, width }) => {
  const f = useFormatMessage()
  const [inView, setInView] = useState(false)

  const [isIosState, setisIosState] = useState(false)
  useEffect(() => {
    setisIosState(isIOS)
  }, [])

  return (
    <>
    <VisibilitySensor
      partialVisibility={true}
      onChange={e => {
        if (e) {
          setInView(true)
        } else {
          setInView(false)
        }
      }}
    >
      <div
        css={`
          position: relative;
          overflow: hidden;
          background: #000;
        `}
      >
        <SGradientRight />

        {!isIosState && <SGradientLeft />}

        <SGradientRight
          css={`
            left: 0;
            bottom: 0;
            right: unset;
            top: unset;
            background: linear-gradient(
              to top right,
              #000000 19%,
              RGBA(0, 0, 0, 0) 50%,
              RGBA(0, 0, 0, 0) 100%
            );
            width: 60vw;
          `}
        />

        <div
          css={`
            @media (min-width: 1201px) {
              display: none;
            }
          `}
        >
          <Ellipses height={1000} />
        </div>

        <div
          css={`
            @media (max-width: 1200px) {
              display: none;
            }
          `}
        >
          <Ellipses height={500} />
        </div>

        <SWrapper>
          <SButtonWrapper>
            <PulsatingShape data-runanim={inView} id="wewewe" />
            <GatsbyImage
              image={getImage(imgs.button)}
              objectFit={`contain`}
              css={`
                width: 376px !important;
                height: 376px !important;
                transform: translatex(-50%) translatey(-50%) scaleZ(1.2)
                  translateZ(0);

                @media (max-width: 1200px) {
                  transform: translatex(-50%) translatey(calc(-50% + 250px))
                    scaleZ(1.2) translateZ(0);
                }
              `}
            />
          </SButtonWrapper>

          <SContentWrapper>
            <div
              css={`
                display: flex;
                flex-direction: column;
              `}
            >
              <SharedH1Nanotech
                css={`
                  text-align: initial;
                  padding: 0;
                  color: #fff;
                  margin: 0;

                  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
                    0px 8px 13px rgba(0, 0, 0, 0.1),
                    0px 18px 23px rgba(0, 0, 0, 0.1);
                `}
              >
                <span
                  css={`
                    all: inherit;
                    font-weight: 200;
                  `}
                >
                  {f("emergencyInfo.secondComponent.h1")}
                </span>{" "}
                {f("emergencyInfo.secondComponent.h2")}
              </SharedH1Nanotech>

              <TextRoboto
                css={`
                  color: #fff;
                  font-weight: 300;
                  letter-spacing: 0.06em;
                  margin-top: 2.5em;
                  max-width: 38em;
                  line-height: 2.1;
                  padding: 0;
                  font-weight: 200;
                  text-shadow: 0px 4px 3px rgb(0 0 0 / 90%),
                    0px 8px 13px rgb(0 0 0 / 90%),
                    0px 18px 23px rgb(0 0 0 / 90%);

                  @media (max-width: 1200px) {
                    font-weight: 300;
                  }
                `}
              >
                {f("emergencyInfo.secondComponent.h3")}
              </TextRoboto>
            </div>
          </SContentWrapper>
        </SWrapper>
      </div>
    </VisibilitySensor>
    </>
  )
}

export const SecondComponent = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          button: file(relativePath: { eq: "emergency/button.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
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
