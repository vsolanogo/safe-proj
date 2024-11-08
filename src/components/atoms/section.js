import React from "react"
import styled from "styled-components"

import { sectionCss, device } from "../../styles"
import { getRem } from "../../utils"

export const StaledSection = styled.section`
  ${({ maxWidth }) => !maxWidth && sectionCss};
  width: ${({ maxWidth }) => maxWidth && "100%"};

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }
`

const Container = styled.div`
  ${sectionCss};

  height: 100%;
`

export const Section = ({ children, maxWidth, css, ...rest }) => {
  return maxWidth ? (
    <StaledSection maxWidth={maxWidth} {...rest}>
      <Container>{children}</Container>
    </StaledSection>
  ) : (
    <StaledSection maxWidth={maxWidth} {...rest}>
      {children}
    </StaledSection>
  )
}
