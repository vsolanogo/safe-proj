import { css, keyframes } from "styled-components"
import { default as mixins } from "../../../styles/mixins"
import { size } from "../../../styles/helpers"

export const slideItemContainerCss = css`
  position: relative;
  ${mixins.displayFlex("column", "center", "flex-start")};
  background-color: var(--white-color);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 20px;
  padding: 26px 15px 25px 32px;
  transition: all 0.2s linear;
  width: 384px;
  cursor: pointer;
  margin-bottom: 20px;

  @media (max-width: ${size.laptop}px) {
    span {
      display: none;
    }
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    padding: 15px 15px 15px 32px;
    width: 100%;
  }

  &:before {
    content: "";
    box-sizing: content-box;
    ${mixins.positionAbsolute("50%", null, null, "-12px")};
    width: 10px;
    height: 10px;
    transform: translateY(-50%);
    background: var(--borderlight-color);
    border: 8px solid var(--white-color);
    border-radius: 50%;
    transition: all 0.2s linear;
    z-index: 2;
  }

  &:hover,
  &.active {
    border-color: var(--blue-color);
    box-shadow: 5px 10px 15px var(--cardshadow-color);

    i {
      color: var(--blue-color);
    }
  }

  &:hover:before,
  &.active:before {
    background-color: var(--blue-color);
  }

  &:first-child,
  &:last-child {
    transform: translateX(-40px);
  }

  span {
    transition: all 0.4s linear;
    opacity: 0;
  }

  &.active.slide_1 {
    span {
      transform: rotate(-10.18deg) translateY(10px) translateX(0px);
      opacity: 1;
    }
  }

  &.active.slide_2,
  &.active.slide_3 {
    span {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  &.active.slide_4 {
    span {
      transform: rotate(32.12deg) translateY(-32px) translateX(0px);
      opacity: 1;
    }
  }

  &.slide_1 {
    transform: translateX(-50px);
    span {
      position: absolute;
      height: 1px;
      width: 125px;
      background-color: var(--blue-color);
      transform: rotate(-10.18deg) translateY(10px) translateX(-130px);
      top: 50%;
      left: -125px;
    }

    @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
      transform: translateX(0);
    }
  }
  &.slide_2 {
    span {
      position: absolute;
      height: 1px;
      width: 85px;
      background-color: var(--blue-color);
      transform: translateX(-105px);
      top: 50%;
      left: -85px;
    }
  }
  &.slide_3 {
    span {
      position: absolute;
      height: 1px;
      width: 82px;
      background-color: var(--blue-color);
      transform: translateX(-105px);
      top: 50%;
      left: -81px;
    }
  }
  &.slide_4 {
    transform: translateX(-50px);
    span {
      position: absolute;
      height: 1px;
      width: 100px;
      background-color: var(--blue-color);
      top: 50%;
      left: -110px;
      transform: rotate(32.12deg) translateY(-32px) translateX(-105px);
    }

    @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
      transform: translateX(0);
      margin-bottom: 0;
    }
  }
`
