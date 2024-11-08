import React, { useEffect, useState, useRef, useCallback } from "react"
import { motion, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import { getRem, getPageTop } from "../../../utils"
import { device, size } from "../../../styles"
import { useWindowSize } from "../../../hooks"

const Wrapper = styled(motion.div)`


  display: grid;
  grid-template-rows: 1fr min-content 1fr;
  grid-column-gap: ${getRem(16)};
  align-self: flex-start;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    min-height: ${getRem(400)};
    width: ${getRem(400)};
  }
`

export const ContentWrapper = ({ children, index }) => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const [inView, setView] = useState(index === 0)
  const windowSizes = useWindowSize()

  const handleChangeStep = useCallback(
    y => {
      const toTop = getPageTop(ref?.current)

      if (toTop - 400 < y) {
        setView(true)
      }

      if (toTop - 400 > y && index !== 0) {
        setView(false)
      }
    },
    [ref, inView]
  )

  useEffect(() => {
    scrollY.onChange(handleChangeStep)
    return () => {
      scrollY.destroy(handleChangeStep)
    }
  }, [])

  return (
    <Wrapper
      ref={ref}
      animate={{
        opacity: inView || windowSizes.width < size.tablet ? 1 : 0.5,
      }}
    >
      {children}
    </Wrapper>
  )
}
