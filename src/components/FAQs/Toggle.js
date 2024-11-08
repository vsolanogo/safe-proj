import React from "react"
import styled from "styled-components"

import ToggleIcon from "../../assets/svg/shevron-arrow.inline.svg"

const Toggler = styled.button`
  outline: none;
  background: var(--timingbg-color);
  border-radius: 10px;
  width: 47px;
  height: 45px;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--blue-color);
  }

  svg {
    transition: transform 0.3s ease-out;
    transform: rotateX(0);
  }

  &.item-opened {
    svg {
      transform: rotate(-180deg);
    }
  }
`

export const Toggle = ({ isOpen }) => {
  return (
    <Toggler className={isOpen ? "item-opened" : ""}>
      <ToggleIcon />
    </Toggler>
  )
}
