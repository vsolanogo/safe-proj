import React from "react"
import styled from "styled-components"
import * as types from "prop-types"

import { getRem } from "../../utils"
import { theme, size } from "../../styles"

const StyledLink = styled.a`
  font-size: ${({ size }) => getRem(size || 14)};
  line-height: ${({ lineHeight }) => getRem(lineHeight || 21)};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-decoration: underline;
  color: var(--blue-color);
  word-break: break-word;

  @media (max-width: ${size.tablet}px) {
    font-size: ${getRem(10)};
  }
`

export const AnchorLink = ({
  href,
  target,
  size,
  lineHeight,
  children,
  ...restProps
}) => {
  return (
    <StyledLink
      href={href}
      target={target || "_blank"}
      size={size}
      lineheight={lineHeight}
      {...restProps}
    >
      {children}
    </StyledLink>
  )
}

AnchorLink.propTypes = {
  href: types.string.isRequired,
  children: types.oneOfType([types.string, types.node]),
  size: types.number,
  lineHeight: types.number,
  target: types.string,
}
