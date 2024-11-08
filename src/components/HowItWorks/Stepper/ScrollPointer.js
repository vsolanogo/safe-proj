import React, { useEffect, useState } from "react"
import { motion, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import TryToScrollPointer from "../../../assets/svg/try-to-scroll-arrow.inline.svg"
import { Text } from "../../atoms"

const ScrollPointerS = styled(motion.div)`
  width: 120px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 110px;
  margin: 0 auto;
`

const TextScrollPointer = styled(Text)`
  color: var(--cyan-color);
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`

export const ScrollPointer = ({ isStart }) => {
  const { scrollY } = useViewportScroll()
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    scrollY.onChange(y => {
      if (y > 400 && !isScrolled) {
        setScrolled(true)
      }
    })
  }, [scrollY, isScrolled])

  return (
    <>
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
