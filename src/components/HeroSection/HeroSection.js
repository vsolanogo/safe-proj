import React, { useState, useContext, useMemo, useEffect } from "react"
import { Dots } from "./components/Dots"
import { Images } from "./components/Images"
import { Content } from "./components/Content"
import { useBannerContext } from "../../context"
import { MainContext } from "../../store/main/contexts"
import { ButtonGif } from "./components/ButtonGif"
import { ButtonGifBgImages } from "./components/ButtonGifBgImages"
import { Ellipses } from "./components/Ellipses"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const SectionS = styled.section`
  width: 100%;
  position: absolute;
  padding-top: 24px;
  z-index: -1;
  pointer-events: none;

  @media (min-width: 426px) {
    padding-top: 24px;
  }

  div {
    flex-direction: column;
  }

  &[data-enablepointerevents="true"] {
    z-index: 1500;
  }

  /* &[data-isbannershow="true"] {
    margin-top: 80px;
  } */
`

const Section2 = styled.div`
  display: flex;
  margin: 0 0.5rem;
  height: 100%;

  @media (min-width: 426px) {
    margin: 0 3.5rem;
  }

  @media (min-width: 1248px) {
    max-width: 71rem;
    margin: 0 auto;
  }
`

const SMainWrapper = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  transform: translateX(16em) translateY(5em);

  @media (max-width: 1700px) {
    transform: translateX(11em) translateY(5em);
  }

  @media (max-width: 1550px) {
    transform: translateX(6em) translateY(5em);
  }

  @media (max-width: 1439px) {
    transform: translateX(1em) translateY(5em);
  }

  @media (max-width: 1024px) {
    transform: translateX(-5em) translateY(33%);
  }
`

const Background = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--black-color);
  z-index: -100;
`

const SHeroSectionWrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  z-index: 20;
  position: relative;
`

const heightToUseF = (height, width) => {
  if (width > 600) {
    return height < 880 && height ? 880 : !height ? "100vh" : height
  }

  return height < 640 && height ? 640 : !height ? "100vh" : height
}
export const HeroSection = React.memo(
  ({ width, height }) => {
    const [drawEllipse, setDrawEllipse] = useState(false)
    const [canvasIsDrawn, setCanvasIsDrawn] = useState(false)
    const [enableButtonPointerEvents, setEnableButtonPointerEvents] =
      useState(true)
    const { isBannerShow } = useBannerContext()
    const { state } = useContext(MainContext)
    const { ref, inView, entry } = useInView({
      threshold: 0,
    })

    const [heightToUse, setHeightToUse] = useState("100vh")

    useEffect(() => {
      if (heightToUse === "100vh" || width > 640) {
        setHeightToUse(heightToUseF(height, width))
      }
    }, [heightToUse, height, width])

    const runAnims = useMemo(() => {
      const heightToUse = heightToUseF(height, width)

      if (heightToUse !== "100vh" && state.splash.hide) {
        return true
      }
      return false
    }, [state.splash.hide, height, width, heightToUse])

    const handleDotHover = b => {
      setEnableButtonPointerEvents(b)
    }

    return (
      <div
        css={`
          overflow: hidden;
          overflow-x: hidden;
          position: relative;
          max-width: 100vw;
          width: 100vw;
        `}
        ref={ref}
      >
        <Ellipses
          drawEllipse={drawEllipse}
          width={width}
          heightToUse={heightToUse}
          setCanvasIsDrawn={setCanvasIsDrawn}
          canvasIsDrawn={canvasIsDrawn}
          inView={inView}
        />

        <Background
          style={{
            height: heightToUse,
          }}
        />

        <SHeroSectionWrapper
          style={{
            height: heightToUse,
          }}
        >
          <SectionS
            data-isbannershow={isBannerShow}
            maxWidth
            heightToUse={heightToUse}
            data-enablepointerevents={enableButtonPointerEvents}
            style={{
              height: heightToUse,
            }}
          >
            <Section2>
              <Content hideSplash={runAnims} />
            </Section2>
          </SectionS>

          <SMainWrapper
            style={{
              height: heightToUse,
            }}
          >
            <Images hideSplash={runAnims} drawEllipse={drawEllipse} />
            <ButtonGif
              hideSplash={runAnims}
              drawEllipse={drawEllipse}
              setDrawEllipse={setDrawEllipse}
            />
            <ButtonGifBgImages hideSplash={runAnims} />
            <Dots canvasIsDrawn={canvasIsDrawn} onDotHover={handleDotHover} />
          </SMainWrapper>
        </SHeroSectionWrapper>
      </div>
    )
  },
  (prev, next) => prev.width === next.width && prev.height === next.height
)
