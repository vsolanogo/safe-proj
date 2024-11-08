import { css } from "styled-components"
import { getRem } from "../../../utils"
import { size } from "../../../styles"

export const titleCss = css`
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  font-weight: 400;
  line-height: ${getRem(55.83)};
  font-size: ${getRem(55)};
  text-transform: uppercase;
  margin: 0 0 24px;
  transform: translateY(20px);
  filter: opacity(0);

  span {
    line-height: ${getRem(55.83)};
    font-size: ${getRem(55)};

    &:last-child {
      font-weight: 700;
    }
    @media (max-width: ${size.tablet}px) {
      line-height: ${getRem(30.37)};
      font-size: ${getRem(25.52)};
    }
  }

  @media (max-width: ${size.tablet}px) {
    line-height: ${getRem(30.37)};
    font-size: ${getRem(25.52)};
  }

  @media (max-width: 600px) {
    padding: 0 30px;
  }
`

export const subtitleCss = css`
  font-size: ${getRem(14)};
  font-family: Roboto, sans-serif;
  font-weight: 300;
  line-height: ${getRem(25)};
  text-align: left;
  color: var(--white-color);
  max-width: 368px;
  transform: translateY(20px);
  filter: opacity(0);

  span {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: ${getRem(14)};
    line-height: ${getRem(25)};
    padding: 0 30px;
  }
`
