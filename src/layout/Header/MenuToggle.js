import React from "react"
import styled, { css } from "styled-components"

import { device, size } from "../../styles"
import { getRem } from "../../utils"
import mixins from "../../styles/mixins"

const ButtonS = styled.button`
  height: ${getRem(40)};
  width: ${getRem(40)};
  border: 2px solid
    ${({ theme: { colors }, color }) =>
      color === colors.white ? colors.borderButton : colors.borderLight};
  border-radius: ${getRem(10)};
  background-color: transparent;
  outline: none;
  ${mixins.displayFlex("column", "center", "center")};
  z-index: 9;
  transition: 0.75s ease-out;
  transform: ${({ open, x2 }) =>
    open ? `translateX(${x2}px)` : `translateX(0px)`};
  -webkit-touch-callout: none;

  @media ${device.laptop} {
    display: none;
  }
`

const SpanStyle = css`
  width: ${getRem(16)};
  height: ${getRem(3)};
  border-radius: ${getRem(10)};
  margin-bottom: ${getRem(2)};
  transition: 0.75s ease-out;

  &[data-bgwhite="true"] {
    background-color: #fff;
  }

  &[data-bgdarkfont="true"] {
    background-color: #181930;
  }
`

const Span1 = styled.div`
  ${SpanStyle};
  filter: opacity(1);
  transform: translateY(0px) rotate(0deg);

  &[data-isopen="true"] {
    filter: opacity(0);
    transform: translateY(5px) rotate(180deg);
  }
`

const Span2 = styled.div`
  ${SpanStyle};
  filter: opacity(0.3);
  transform: rotate(0deg);

  &[data-isopen="true"] {
    filter: opacity(1);
    transform: rotate(-45deg);
  }
`

const Span3 = styled.div`
  ${SpanStyle};
  filter: opacity(0.3);
  transform: rotate(0deg) translateY(0px) translateX(0px);

  &[data-isopen="true"] {
    filter: opacity(1);
    transform: rotate(45deg) translateY(-3.5px) translateX(-3.5px);
  }
`

export const MenuToggle = ({ isOpen, toggleNavbar, color, ...restProps }) => {
  const windowWidth = typeof window !== "undefined" && window.innerWidth

  return (
    <ButtonS
      color={color}
      onClick={toggleNavbar}
      open={isOpen}
      x2={windowWidth < size.mobileL ? 28 : 0}
      {...restProps}
    >
      <Span1
        first
        data-isopen={isOpen}
        data-bgdarkfont={color !== "#fff"}
        data-bgwhite={color === "#fff"}
      />
      <Span2
        data-isopen={isOpen}
        data-bgdarkfont={color !== "#fff"}
        data-bgwhite={color === "#fff"}
      />
      <Span3
        data-isopen={isOpen}
        data-bgdarkfont={color !== "#fff"}
        data-bgwhite={color === "#fff"}
      />
    </ButtonS>
  )
}
