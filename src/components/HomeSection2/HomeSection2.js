import React from "react"
import { Title } from ".."
import { useFormatMessage, useAnimationInView } from "../../hooks"
import { Cards } from "./Cards/Cards"
import { animation } from "../../config"
import { getRem } from "../../utils"
import styled from "styled-components"
import { device, size } from "../../styles/helpers"

const TitleS = styled(Title)`
  line-height: ${getRem(49.61)};

  @media (max-width: ${size.tablet}px) {
    line-height: ${getRem(35.45)};
  }
`

const SectionS = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: 0 ${getRem(8)};

  @media ${device.mobileL} {
    margin: 0 ${getRem(56)};
  }

  @media ${device.laptopL} {
    max-width: ${getRem(1136)};
    margin: 0 auto;
  }

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  padding-bottom: ${({ paddingY }) => getRem(paddingY || 30)};

  @media ${device.tablet} {
    padding-bottom: ${({ paddingY }) => getRem(paddingY || 60)};
  }
`

export const HomeSection2 = () => {
  const f = useFormatMessage()
  const { ref, controls } = useAnimationInView()

  return (
    <SectionS justify="center" direction="column">
      <TitleS
        ref={ref}
        animate={controls}
        transition={{ ...animation.transition, duration: 1.5 }}
        initial={{ opacity: 0, y: 50 }}
        marginY={3}
        weight={400}
        align="center"
      >
        <strong>{f("home.section2.title.part1")}</strong>
        <br />
        {f("home.section2.title.part2")}
      </TitleS>
      <Cards />
    </SectionS>
  )
}
