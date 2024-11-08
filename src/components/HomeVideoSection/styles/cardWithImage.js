import { css } from "styled-components"
import { size } from "../../../styles/helpers"

export const cardWithImageCss = css`
  margin: 0 10px 10px 0;
  width: calc(50% - 5px);
  
  &:nth-child(2) {
    margin-right: 0;
  }
  
  @media (min-width: 600px) and (max-width: ${size.laptopS}px) {
    width: calc(50% - 5px);
    max-width: unset;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 0 25px 0;
  }
`