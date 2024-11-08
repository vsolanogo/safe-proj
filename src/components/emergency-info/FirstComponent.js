import React from "react"
import { SharedDivider, SharedH1Nanotech, TextRoboto } from "../shared"
import { ComponentOverMap } from "./ComponentOverMap"
import Arrow from "../../assets/svg/arrow.svg"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import PulsingLottiejson from "../../assets/animations/pulsing.json"
import img1 from "../../assets/images/emergency/map3.png"
import img2 from "../../assets/images/emergency/path2.png"
import { useFormatMessage } from "../../hooks"

const SWrapper = styled.section`
  margin: auto;
  max-width: 111em;
  padding: 0 2em;
  display: grid;
  grid-template-columns: 13em 10fr 3em 7fr 13em;

  @media (max-width: 1586px) {
    grid-template-columns: 10fr 4em 7fr;
    max-width: 86em;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const SLeftPart = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;

  @media (max-width: 1586px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  @media (max-width: 1100px) {
    grid-column-start: unset;
    grid-column-end: unset;
  }
`

const SRightPart = styled.div`
  grid-column-start: 4;
  grid-column-end: 6;
  position: relative;
  @media (max-width: 1586px) {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  @media (max-width: 1100px) {
    grid-column-start: unset;
    grid-column-end: unset;
    margin-top: 4em;
  }

  @media (min-width: 900px) {
    transform: translateY(4.5em);
  }
`

const SPulseWrapper = styled.div`
  background-color: transparent;
  overflow: visible;
  z-index: 30;
  position: absolute;
  left: 68.3%;
  top: 23%;
  transform: translateX(-50%) translateY(-50%);
  filter: opacity(0.5);
  perspective: 180px;

  > div {
    transform: rotateX(55deg) rotateY(0deg);
    transform-style: preserve-3d;
  }
`

export const PulsatingEllipse = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <>
      <SPulseWrapper ref={ref}>
        {/* <Lottie
          options={{
            animationData: PulsingLottiejson,
            renderer: "canvas",
            autoplay: false,
          }}
          autoplay={false}
          width={70}
          height={70}
          isPaused={!inView}
        /> */}
      </SPulseWrapper>
    </>
  )
}

export const FirstComponent = () => {
  const f = useFormatMessage()

  return (
    <>
      <SWrapper>
        <SLeftPart>
          <SharedH1Nanotech
            css={`
              text-align: initial;
              padding: 0;
            `}
          >
            <span
              css={`
                all: inherit;
                font-weight: 300;
              `}
            >
              {f("emergencyInfo.firstComponent.h1")}
            </span>{" "}
            {f("emergencyInfo.firstComponent.h2")}
          </SharedH1Nanotech>

          <TextRoboto
            css={`
              padding: 0 0.3em;
              margin: 1em 0;
              line-height: 2;
              max-width: 37em;
            `}
          >
            {f("emergencyInfo.firstComponent.h3")}
          </TextRoboto>

          <div
            css={`
              display: flex;
              margin-top: 1em;
              @media (min-width: 900px) {
                margin-top: 4em;
              }
            `}
          >
            <TextRoboto
              css={`
                padding: 0 0.3em;
                margin: 1em 0;
                font-size: 1.2em;
              `}
            >
              {f("formSection.form.title")}
            </TextRoboto>

            <TextRoboto
              css={`
                padding: 0 0.3em;
                margin: 1em 0;
                font-size: 1.2em;
                color: var(--blue-color);
                display: flex;
                position: relative;

                :before {
                  content: "";
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  background-color: var(--blouetwo-color);
                  transform: scaleX(0) translateY(0.5em);
                  transform-origin: left;
                  transition: all 0.3s ease-in-out;
                  width: 100%;
                  height: 2px;
                  margin-left: 10px;
                }

                :hover {
                  :before {
                    transform: scaleX(1) translateY(0.5em);
                  }
                }
              `}
              as="a"
              href="/contacts"
            >
              <span
                css={`
                  all: inherit;
                  display: block;
                  margin: 0;
                  min-width: 7em;
                `}
              >
                {f("aboutUs.section1.contactUs")}
              </span>
              <img
                src={Arrow}
                css={`
                  max-width: 1em;
                `}
              />
            </TextRoboto>
          </div>
        </SLeftPart>

        <div
          css={`
            @media (max-width: 1100px) {
              display: none;
            }
          `}
        ></div>

        <SRightPart>
          <ComponentOverMap />

          <div
            css={`
              img {
                overflow: visible;
                width: 100%;
              }
              overflow: visible;
              filter: drop-shadow(0px -3px 33px #d5e1fd);
              perspective: 150px;
              position: relative;
            `}
          >
            <img src={img1} loading="eager" />

            {/* <StaticImage
              src="../../assets/images/emergency/map.png"
              placeholder="none"
              layout="fullWidth"
              objectFit="contain"
              formats={["png"]}
              quality={100}
            /> */}

            <PulsatingEllipse />

            <div
              css={`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 40;

                img {
                  overflow: visible;
                  position: absolute;
                  width: 35%;
                  top: 21%;
                  left: 41%;
                  height: 35%;
                }
                overflow: visible;
              `}
            >
              <img src={img2} loading="eager" />
            </div>
          </div>
        </SRightPart>
      </SWrapper>

      <SharedDivider count={2} />
    </>
  )
}
