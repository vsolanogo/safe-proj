import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import button from "../../../assets/images/canvas-gif-button.png"
import buttonGif from "../../../assets/gif/button.gif"

export const dropAnimation = keyframes`
  0% {
    filter: opacity(0);
    transform: translateY(-5.5em);
  }

  100% {
    filter: opacity(1);
    transform: translateY(-0.88em);
  }
`

export const dropAnimationSmall = keyframes`
  0% {
    filter: opacity(0);
    transform: translateY(-5.5em)  scale(0.75);
  }

  100% {
    filter: opacity(1);
    transform: translateY(-0.88em)  scale(0.75);
  }
`

const GifPlayerWrapper = styled.div`
  z-index: 1150;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7em;
  width: 10em;
  filter: opacity(0);
  transform: translateY(-100px);
  animation-play-state: paused;
  animation-name: ${dropAnimation};
  animation-fill-mode: forwards;
  animation-direction: linear;
  animation-duration: 1200ms;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const SImg = styled.img`
  height: 100%;
  width: 100%;
  position: relative;

  @media (max-width: 1183px) {
    transform: scale(0.65);
  }
`

const SImportantGifPreloadForBrowser = styled.img`
  position: fixed;
  height: 0px;
  width: 0px;
  filter: opacity(0);
  overflow: hidden;
  z-index: -1000;

  @media (max-width: 1183px) {
    transform: scale(0.65);
  }
`

export const ButtonGif = React.memo(
  ({ setDrawEllipse, hideSplash, drawEllipse }) => {
    const [displayPressAnimation, setDisplayPressAnimation] = useState(false)

    useEffect(() => {
      let timer1 = null
      let timer2 = null

      if (hideSplash && !displayPressAnimation) {
        timer1 = setTimeout(() => setDisplayPressAnimation(true), 1000)
        timer2 = setTimeout(() => setDrawEllipse(true), 2000)
      }

      return () => {
        try {
          clearTimeout(timer1)
          clearTimeout(timer2)
        } catch {}
      }
    }, [hideSplash, drawEllipse])

    return (
      <>
        <SImportantGifPreloadForBrowser src={buttonGif} loading="eager" />
        <GifPlayerWrapper data-runanim={hideSplash}>
          <SImg src={button} loading="eager" />
          {displayPressAnimation && (
            <SImg
              src={buttonGif}
              loading="eager"
              css={`
                z-index: 5;
                position: absolute;
              `}
            />
          )}
        </GifPlayerWrapper>
      </>
    )
  },

  (prev, next) =>
    prev.hideSplash === next.hideSplash && prev.drawEllipse === next.drawEllipse
)
