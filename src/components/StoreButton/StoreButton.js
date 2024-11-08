import React from "react"
import styled from "styled-components"

import { theme } from "../../styles"
import { getRem } from "../../utils"
import mixins from "../../styles/mixins"

const StyledButton = styled.a`
  ${mixins.displayFlex(null, "center", "center")};
  position: relative;
  padding: 5px 17px 5px 38px;
  outline: none;
  background: none;
  width: auto;
  max-width: 120px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid ${theme.colors.borderButton};
  font-size: ${getRem(14)};
  line-height: ${getRem(21)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: ${({ color }) => color || theme.colors.darkFont};
  white-space: nowrap;

  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: var(--blue-color);
    transition: border-color 0.3s ease-in-out;
  }

  i {
    ${mixins.displayFlex(null, "center", "center")};
    ${mixins.positionAbsolute("50%", null, null, "13px")};
    transform: translateY(-50%);
    color: ${({ color }) => color || theme.colors.darkFont};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const StoreButton = ({ href, iconClassName, color, children }) => (
  <StyledButton
    target="blank"
    rel="noreferrer noopener"
    href={href}
    color={color}
  >
    <i className={iconClassName} />
    {children}
  </StyledButton>
)
