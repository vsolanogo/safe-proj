import { css } from "styled-components"

import { getRem } from "../utils"

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 426,
  mobileXL: 580,
  tablet: 768,
  laptopS: 992,
  laptop: 1024,
  laptopL: 1248,
  desktop: 1440,
}

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  mobileXL: `(min-width: ${size.mobileXL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}

export const sectionCss = css`
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
`

export const iconsCss = css`
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'IcoFonts' !important;
  font-weight: normal;
  font-variant: normal;
  font-style: normal;
  speak: none;    
  line-height: 1;
  text-transform: none;
  
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
