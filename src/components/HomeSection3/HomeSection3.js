import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import { sectionCss, device } from "../../styles"
import { useMount } from "../../hooks"
import { PhoneSlider } from "./PhoneSlider/PhoneSlider"
import { getRem } from "../../utils"
import { VerticalSlider } from "./VerticalSlider/VerticalSlider"
import { content } from "./VerticalSlider/VerticalSliderContent"

const SectionS = styled.section`
  width: 100%;
  position: relative;
  padding-bottom: ${getRem(50)};
  padding-top: ${getRem(50)};

  @media ${device.laptop} {
    padding-bottom: ${getRem(212)};
    padding-top: ${getRem(112)};
  }

  div {
    justify-content: space-between;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    background-color: var(--brightgreen-color);
    height: 100%;
    z-index: -1;
    left: -60%;
    width: 280%;
    // transform: rotate(-9deg);

    @media ${device.tablet} {
      height: calc(100% - 200px);
      // transform: rotate(-7deg);
    }

    @media ${device.laptop} {
      width: 150%;
      left: -25%;
      height: 100%;
      // transform: rotate(-7deg);
    }
  }
`

const Container = styled.div`
  ${sectionCss}
  position: relative;
`

export const HomeSection3 = () => {
  const refT = useRef({})
  const isMount = useMount()
  const [containerRect, setContainerRect] = useState()

  useEffect(() => {
    if (isMount) {
      setContainerRect(refT.current?.getBoundingClientRect())
    }
  }, [isMount])

  return (
    <SectionS>
      <Container ref={refT} align="center">
        <VerticalSlider containerRect={containerRect} content={content} />
        {containerRect && (
          <PhoneSlider containerRect={containerRect} content={content} />
        )}
      </Container>
    </SectionS>
  )
}
