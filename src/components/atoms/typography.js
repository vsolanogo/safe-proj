import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import { getRem } from "../../utils"
import { theme, device } from "../../styles"

const getFontSize = tag => {
  switch (tag) {
    case "h1":
      return 35
    case "h2":
      return 30
    case "h3":
      return 24
    case "h4":
      return 18
    default:
      return 14
  }
}

const getFontSizeMobile = tag => {
  switch (tag) {
    case "h1":
      return 25
    case "h2":
      return 25
    case "h3":
      return 24
    case "h4":
      return 18
    default:
      return 14
  }
}

export const typographyCss = css`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({ marginY, marginX }) =>
    `${getRem(marginY || 0)} ${getRem(marginX || 0)} `};
  text-align: ${({ align }) => align};

  line-height: ${({ lineHeight }) => getRem(lineHeight || 34)};
  font-size: ${({ size, as }) =>
    size ? getRem(size) : getRem(getFontSizeMobile(as))};

  @media ${device.tablet} {
    line-height: ${({ lineHeight }) => getRem(lineHeight || 48)};
    font-size: ${({ size, as }) =>
      size ? getRem(size) : getRem(getFontSize(as))};
  }
`

export const Title = styled.h1`
  ${typographyCss};
`
export const TitleH1 = styled.h1`
  ${typographyCss};
`

Title.defaultProps = {
  color: theme.colors.darkFont,
  weight: "bold",
  marginY: 0,
  marginX: 0,
  as: "h1",
}

export const Text = styled.p`
  ${typographyCss};
  font-family: Roboto, sans-serif;
`

export const TextP = styled.p`
  ${typographyCss};
  font-family: Roboto, sans-serif;
`

Text.defaultProps = {
  ...Title.defaultProps,
  lineHeight: 16,
  marginY: 15,
  as: "p",
  weight: "normal",
}
