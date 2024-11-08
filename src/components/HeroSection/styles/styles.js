import styled, { keyframes, css } from "styled-components"
import { motion } from "framer-motion"

import { device } from "../../../styles"
import { getRem } from "../../../utils"

export const imgProperties = css`
  width: ${({ width }) => getRem(width * 0.565)};
  height: ${({ height }) => getRem(height * 0.565)};
  left: ${({ left, width }) => left - (width * 0.565) / 2}px;
  top: ${({ top, height }) => top - (height * 0.565) / 2}px;

  @media ${device.tablet} {
    left: ${({ left, width }) => left - width / 2}px;
    top: ${({ top, height }) => top - height / 2}px;
    width: ${({ width }) => getRem(width)};
    height: ${({ height }) => getRem(height)};
  }
`
