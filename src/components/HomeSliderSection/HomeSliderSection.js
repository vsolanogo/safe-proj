import React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

import { device, fadeInElemBottom, sectionCss, size } from "../../styles"
import { useFormatMessage } from "../../hooks"
import { getRem } from "../../utils"
import { Title, typographyCss } from "../atoms"
import { SliderContent } from "./components"
import { SliderMobile } from "./components/Slider/SliderMobile"

const SectionS = styled.section`
  width: 100%;
  position: relative;
  padding-bottom: ${getRem(50)};
  padding-top: ${getRem(50)};
  background-color: var(--white-color);
  max-width: 100vw;
  overflow: hidden;
  overflow-x: hidden;

  @media (max-width: ${size.tablet}px) {
    padding-bottom: ${getRem(120)};
  }
`

const Container = styled.div`
  ${sectionCss};
  position: relative;
  flex-direction: column;
`

const TitleS = styled.h1`
  ${typographyCss};
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInElemBottom};
  animation-fill-mode: forwards;
  animation-duration: 1000ms;
  animation-direction: ease-out;
  will-change: opacity, transform;
  animation-play-state: paused;

  @media ${device.tablet} {
    line-height: 119%;
  }

  @media (max-width: ${size.tablet}px) {
    font-size: ${getRem(25.52)};
    line-height: ${getRem(30.37)};
  }

  &[data-inview="true"] {
    animation-play-state: running;
  }
`

const Subtitle = styled.div`
  font-size: ${getRem(18)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: ${getRem(21)};
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInElemBottom};
  animation-play-state: paused;
  animation-fill-mode: forwards;
  animation-duration: 1000ms;
  animation-direction: ease-out;
  will-change: opacity, transform;

  @media (max-width: ${size.tablet}px) {
    font-size: ${getRem(8.35)};
    line-height: ${getRem(9.74)};
  }

  &[data-inview="true"] {
    animation-play-state: running;
  }
`

export const HomeSliderSection = ({ width }) => {
  const f = useFormatMessage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <SectionS>
      <Container align="center" ref={ref}>
        <TitleS
          data-inview={inView}
          weight={400}
          size={55}
          marginY={0}
          align="center"
        >
          {f("home.sliderSection.title", {
            companyName: <strong>{f("companyName")}</strong>,
          })}
        </TitleS>
        <Subtitle data-inview={inView}>
          {f("home.sliderSection.subTitle")}
        </Subtitle>

        <SliderContent isInView={inView} width={width} />
        <SliderMobile isInView={inView} />
      </Container>
    </SectionS>
  )
}
