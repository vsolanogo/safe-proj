import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import { getRem } from "../../utils"
import { typographyCss, Text } from "./typography"

const transparentCss = css`
  display: grid;
  grid-template-columns: ${({ isIcon }) =>
    isIcon ? `${getRem(13)} 1fr` : "1fr"};
  align-items: center;

  grid-gap: ${({ gap }) => getRem(gap || 10)};

  direction: ${({ revers }) => revers && "rtl"};

  border: ${getRem(2)} solid
    ${({ theme: { colors }, color }) =>
      color === colors.white ? colors.borderButton : colors.borderLight};

  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: var(--blue-color);
    transition: border-color 0.3s ease-in-out;
  }
`

const blueCss = css`
  background-color: var(--blue-color);
  color: var(--white-color);
  box-shadow: 1px 20px 20px -15px var(--bluetransparentshadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--buttonhoverblue-color);
  }
`

const blueWithShadowCss = css`
  background-color: var(--blue-color);
  color: var(--white-color);
  box-shadow: 1px 20px 20px -15px var(--blueshadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--buttonhoverblue-color);
  }
`

const grayCss = css`
  background-color: var(--darkfont-color);
  color: var(--white-color);
  box-shadow: 1px 20px 20px -15px var(--greytransparentshadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--buttonhovergray-color);
  }
`

export const getButtonCssByType = type => {
  switch (type) {
    case "blue":
      return blueCss
    case "blueWithShadow":
      return blueWithShadowCss
    case "gray":
      return grayCss
    default:
      return transparentCss
  }
}

const StyledButton = styled(motion.a)`
  outline: none;
  background: none;
  border: none;
  border-radius: ${getRem(10)};

  ${typographyCss};

  height: ${({ height }) => getRem(height)};
  width: ${({ width }) => (width ? getRem(width) : "auto")};
  padding: ${({ paddingY, paddingX }) =>
    `${getRem(paddingY)} ${getRem(paddingX)}`};

  ${({ type }) => getButtonCssByType(type)}
`

export const Button = ({ icon, children, as, ...rest }) => {
  return (
    <StyledButton as={as} isIcon={!!icon} {...rest}>
      {icon}
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  ...Text.defaultProps,
  marginY: 0,
  marginX: 0,
  paddingX: 5,
  paddingY: 5,
  height: 30,
  as: "a",
}
