import React from "react"
import styled from "styled-components"

import { CustomSlider } from "./Slider"
import { ListCards } from "./ListCards"
import { getRem } from "../../utils"
import { Title } from ".."
import { device, size } from "../../styles"
import { sliders } from "./content"
import { useWindowSize, useFormatMessage } from "../../hooks"

const StyledS = styled.section`
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
  width: ${({ maxWidth }) => maxWidth && "100%"};

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  flex-direction: column;
  padding-top: ${getRem(3)};

  @media ${device.tablet} {
    padding-top: ${getRem(62)};
    padding-bottom: ${getRem(20)};
  }

  @media ${device.desktop} {
    padding-top: ${getRem(40)};
    padding-bottom: ${getRem(4)};
  }
`

export const AboutUsSection3 = () => {
  const f = useFormatMessage()
  const { width } = useWindowSize()
  const isTablet = width < size.laptop

  return (
    <StyledS>
      <Title align="center">{f("aboutUs.section3.title")}</Title>
      {isTablet ? (
        <ListCards content={sliders} />
      ) : (
        <CustomSlider content={sliders} />
      )}
    </StyledS>
  )
}
