import { css } from "styled-components"
import { size } from "../../../styles/helpers"
import { default as mixins } from "../../../styles/mixins"

export const slideButtonTopCss = css`
  ${mixins.positionAbsolute(0, "-145px")};
  width: 378px;
  height: 378px;
  
  @media (max-width: ${size.tablet}px) {
    width: 172px;
    height: 172px;
    ${mixins.positionAbsolute("-55px", 0)};
  }
  
  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    width: 280px;
    height: 280px;
  }
`