import React, { useEffect, useState } from "react"
import { motion, AnimatePresence, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import ArrowPointer from "../../../assets/svg/arrow-pointer.inline.svg"
import ArrowPointerBig from "../../../assets/svg/arrow-pointer-big.inline.svg"
import TryToScrollPointer from "../../../assets/svg/try-to-scroll-arrow.inline.svg"
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

const ScrollPointerS = styled(motion.div)`
  width: 120px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 70%;
  top: -20px;

  @media ${device.tablet} {
    top: -${getRem(50)};
    left: calc(65%);
  }

  @media ${device.laptop} {
    left: 58%;
  }
`

const TextScrollPointer = styled(Text)`
  color: var(--cyan-color);
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`

const TextPointer = styled(TextScrollPointer)`
  position: absolute;
  top: -28px;
  right: -12px;

  @media ${device.tablet} {
    top: -5px;
    right: -10px;
  }
`

export const Pointer = ({ isStart }) => {
  const f = useFormatMessage()
  const { scrollY } = useViewportScroll()
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const isTablet = width < size.laptop

  useEffect(() => {
    scrollY.onChange(y => {
      if (y > 600 && !isScrolled) {
        setScrolled(true)
      }
    })
  }, [])

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

      <ScrollPointerS
        transition={{ ease: "easeOut", duration: 1 }}
        initial="hide"
        animate={isStart && !isScrolled ? "show" : "hide"}
        variants={{
          show: {
            opacity: 1,
            y: 0,
          },
          hide: {
            opacity: 0,
            y: -20,
          },
        }}
      >
        <TextScrollPointer marginY={2}>try to scroll</TextScrollPointer>
        <TryToScrollPointer />
      </ScrollPointerS>
    </>
  )
}
