import React, { useState } from "react"
import styled from "styled-components"
import { motion, useViewportScroll } from "framer-motion"

import { Point } from "./Point"

import DashedLine from "../../../../assets/svg/dashed-line.inline.svg"
import { Timing } from "./Timing"
import { Content } from "./Content"

const Wrapper = styled(motion.div)`

  position: absolute;
  height: min-content;
  top: ${({ top }) => top}px;
  display: flex;
  min-height: 72px;
  /* align-items: center; */

  justify-content: center;
  width: 100%;
`

export const Step = React.memo(
  ({ initial, position, top, timeToShow, content }) => {
    const [show, setShow] = useState(initial)
    const { scrollY } = useViewportScroll()

    scrollY.onChange(y => {
      if (y > position && !show && !initial) {
        setShow(true)
      }
    })

    return show ? (
      <Wrapper top={top - 36}>
        <Timing time={timeToShow} contentSide={content.contentSide} />
        <DashedLine
          style={{ position: "absolute", zIndex: "-1", marginTop: 36 }}
        />
        <Point initial={show} style={{ marginTop: 32 }} />
        <Content {...content} />
      </Wrapper>
    ) : null
  }
)
