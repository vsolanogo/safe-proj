import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

import ArrowPointer from "../../../assets/svg/arrow-pointer.inline.svg"
import ArrowPointerBig from "../../../assets/svg/arrow-pointer-big.inline.svg"
import { Text } from "../../atoms"
import { getRem } from "../../../utils"
import { device, size } from "../../../styles"
import { useWindowSize, useFormatMessage } from "../../../hooks"

const PointerS = styled(motion.div)`
  position: absolute;
  left: calc(71%);
  top: -20px;

  @media ${device.tablet} {
    top: -${getRem(50)};
    left: calc(65%);
  }

  @media ${device.laptop} {
    left: calc(58%);
  }
`

const TextPointer = styled(Text)`
  color: var(--cyan-color);
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  position: absolute;
  top: -28px;
  right: -12px;

  @media ${device.tablet} {
    top: -5px;
    right: -10px;
  }
`

export const ClickPointer = ({ isStart }) => {
  const f = useFormatMessage()
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)
  const isTablet = width < size.laptop

  const textPointer = isTablet
    ? "product.howItWork.pointer.mobile"
    : "product.howItWork.pointer"

  useEffect(() => {
    setIsMobile(width < size.tablet)
  }, [width])

  return (
    <>
      <AnimatePresence>
        {!isStart && (
          <PointerS
            transition={{ ease: "easeOut", duration: 1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {isMobile ? <ArrowPointer /> : <ArrowPointerBig />}
            <TextPointer> {f(textPointer)} </TextPointer>
          </PointerS>
        )}
      </AnimatePresence>
    </>
  )
}
