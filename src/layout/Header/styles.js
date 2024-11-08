import { css } from "styled-components"
import { getRem } from "../../utils"
import { device, size } from "../../styles"

export const listCss = css`
  display: flex;
  flex-direction: column;
  z-index: 3;
  margin-left: ${getRem(10)};
  margin-top: ${getRem(67)};
  height: calc(100% - ${getRem(70)});
  padding-top: ${getRem(50)};
  overflow-y: auto;

  @media ${device.mobileL} {
    padding-top: ${getRem(100)};
    margin-top: ${getRem(80)};
    margin-left: ${getRem(30)};
  }

  @media ${device.laptop} {
    margin-top: 0;
    padding: 0;
    margin-left: 0;
    flex-direction: row;
  }

  @media (max-width: ${size.tablet}px) {
    height: calc(100% - ${getRem(85)});
  }
`

export const listItemCss = css`
  @media ${device.laptop} {
    margin: 0 ${getRem(7)};
    text-align: center;
  }
`