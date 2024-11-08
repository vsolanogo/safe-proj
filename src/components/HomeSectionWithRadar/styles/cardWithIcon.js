import { css } from "styled-components"
import { getRem } from "../../../utils"
import { size } from "../../../styles/helpers"
import { default as mixins } from "../../../styles/mixins"

export const cardWithIcon = css`
  position: absolute;
  
  &.block-icon-3 {
    right: 15px;
    bottom: 17%;
  }
  
  &.block-icon-2 {
    left: -75px;
  }
  
  &.block-icon-1 {
    right: 0;
    top: 15%;
  }
  
  @media (min-width: ${size.laptopS}px) and (max-width: ${size.laptopL}px) {
    ${mixins.displayFlex("column", "center", "flex-start")};
    max-width: ${getRem(330)};
    
    div {
      margin: 20px 0 0 0;
    }

    &.block-icon-2 {
      left: -45px;
    }
  }
  
  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptopS}px) {
    ${mixins.displayFlex("column", "center", "flex-start")};
    max-width: ${getRem(250)};
    
    div {
      margin: 20px 0 0 0;
    }
    
    &.block-icon-1 {
      top: 10%;
    }

    &.block-icon-2 {
      left: -50px;
    }

    &.block-icon-3 {
      bottom: 10%;
    }
  }
  
  @media (max-width: ${size.tablet}px) {
    position: relative;
    max-width: unset;
    width: 100%;
   
    &.block-icon-1 {
      right: unset;
      top: unset;
    }
    
    &.block-icon-2 {
      margin: 15px 0;
      left: unset;
    }
    
    &.block-icon-3 {
      right: unset;
      bottom: unset;
    }
  }
  
  @media (max-width: ${size.mobileXL}px) {
   &.block-icon-1 {
      right: unset;
      top: unset;
    }
  }
`