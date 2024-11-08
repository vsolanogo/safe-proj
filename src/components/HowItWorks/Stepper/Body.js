import React, { useState, useEffect } from "react"
import { motion, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import { Steps } from "./Steps"
import { Finish } from "./Finish"

const Wrapper = styled(motion.div)`


  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height}px;
`

export const Body = ({ isStart, height, time, offsetFromTop }) => {
  const [showSteps, setShowSteps] = useState(false)
  const { scrollY } = useViewportScroll()
  const [startScrollY, setStartScrollY] = useState(0)

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setTimeout(() => {
        setStartScrollY(scrollY.get() - offsetFromTop)
        setShowSteps(true)
      }, 300)
    }

    return () => clearTimeout(timer);
  }, [isStart])

  return (
    <>
      <Wrapper height={height}>
        {showSteps && (
          <Steps
            startScrollY={startScrollY}
            height={height}
            time={time}
            offsetFromTop={offsetFromTop}
            isStart={isStart}
          />
        )}
      </Wrapper>
      {showSteps && <Finish height={height} startScrollY={startScrollY} />}
    </>
  )
}
