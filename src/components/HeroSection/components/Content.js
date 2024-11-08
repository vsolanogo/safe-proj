import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"

import { useFormatMessage } from "../../../hooks"
import { typographyCss, getButtonCssByType } from "../../index"
import { device, size } from "../../../styles"
import { getRem } from "../../../utils"

const a1 = keyframes`
    0% {
      transform: translateY(80px);
      filter: opacity(0);
    }
    
    100% {
      transform: translateY(0px);
      filter: opacity(1);
    }
`

const TitleS = styled.h1`
  ${typographyCss};
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  font-size: 25px;
  line-height: 101.3%;
  width: 250px;
  color: var(--white-color);
  margin-bottom: 16px;
  z-index: 5;

  @media ${device.tablet} {
    width: ${getRem(531)};
    font-size: 60px;
    line-height: 61px;
    margin: ${getRem(9)} 0;
  }
`

const TextS = styled.p`
  ${typographyCss};
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.49;
  width: 300px;
  margin: 0;
  color: var(--white-color);
  font-family: George, sans-serif;

  @media ${device.tablet} {
    width: ${getRem(431)};
    font-size: ${getRem(25)};
    line-height: ${getRem(37.25)};
    margin: ${getRem(4)} 0;
  }
`

const ButtonS = styled.a`
  outline: none;
  background: none;
  border: none;
  border-radius: ${getRem(10)};
  pointer-events: all;

  ${typographyCss};

  height: ${({ height }) => getRem(height)};
  padding: ${({ paddingY, paddingX }) =>
    `${getRem(paddingY)} ${getRem(paddingX)}`};

  ${({ type }) => getButtonCssByType(type)}

  width: ${getRem(214)};
  color: var(--white-color);

  @media ${device.tablet} {
    width: ${getRem(314)};
  }

  @media ${device.laptop} {
    width: ${getRem(272)};
  }
  z-index: 9999999;
  position: relative;
`

const Container = styled.div`
  filter: opacity(0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 45%;
  text-align: center;
  height: 100%;
  margin-top: -30px;

  animation: ${a1} 1s ease-out;
  animation-play-state: paused;
  animation-fill-mode: forwards;

  @media (max-width: ${size.mobileL}px) {
    margin-top: 0;
    transform: translatey(80px);
  }

  @media ${device.laptop} {
    text-align: left;
    align-items: flex-start;
    position: absolute;
  }

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

export const Content = React.memo(
  ({ hideSplash }) => {
    const [isRendered, setRendered] = useState(false)

    const f = useFormatMessage()

    const scrollToContactForm = () => {
      const contactFormSection = document.getElementById("contact-form")
      contactFormSection.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
      setRendered(true)
    }, [])

    const dataRunAnim = hideSplash && isRendered

    return (
      <Container direction="column" data-runanim={dataRunAnim} id="qwerty">
        <TitleS>{f("home.section1.title")}</TitleS>

        <TextS
          style={{ maxWidth: getRem(431) }}
          size={25}
          lineHeight={37.25}
          marginY={4}
        >
          {f("home.section1.text")}
        </TextS>

        <ButtonS
          type="blueWithShadow"
          size={20}
          lineHeight={23}
          height={56}
          marginY={20}
          onClick={scrollToContactForm}
        >
          {f("home.section1.button")}
        </ButtonS>
      </Container>
    )
  },
  (prev, next) => prev.hideSplash === next.hideSplash
)
