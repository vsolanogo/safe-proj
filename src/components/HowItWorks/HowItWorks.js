import React from "react"
import styled from "styled-components"

import { Title } from "../atoms"
import { Stepper } from "./Stepper/Stepper"
import { getRem } from "../../utils"
import { device } from "../../styles"
import { useFormatMessage } from "../../hooks"

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

  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  @media ${device.tablet} {
    padding-top: ${getRem(48)};
  }
`

export const HowItWorks = () => {
  const f = useFormatMessage()
  return (
    <SectionS>
      <Title>{f("product.howItWork.title")}</Title>
      <Stepper />
    </SectionS>
  )
}
