import React from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import { Step } from "./Step/Step"
import { Point } from "./Step/Point"
import { Timer } from "./Timer"
import { steps } from "./data"
import { getPosition } from "./helpers"
import { EndedStep } from "./Step/EndedStep"
import { ScrollPointer } from "./ScrollPointer"

const Line = styled(motion.span)`
  background-color: ${({ theme }) => theme.colors.stepperLine};
  width: 1px;
  transform-origin: top center;
  height: 38px;
  position: absolute;
  z-index: -1;
`

export const Steps = ({
  height,
  time,
  offsetFromTop,
  startScrollY,
  isStart,
}) => {
  const { scrollY } = useViewportScroll()

  let progressY = null

  progressY = useTransform(scrollY, val => {
    const prevVal = progressY?.get() || 0

    let correctedVal = val - startScrollY

    if (val >= startScrollY + height) {
      return height
    }

    return prevVal > correctedVal ? prevVal : correctedVal
  })

  return (
    <>
      <Point initial />
      <Line
        style={{
          height: progressY,
        }}
      />
      <Timer
        heightLine={progressY}
        height={height}
        time={time}
        startScrollY={startScrollY}
        offsetFromTop={offsetFromTop}
      />
      <ScrollPointer isStart={isStart} />
      {steps.map(({ timeToShow, ...rest }) => (
        <Step
          key={uuid()}
          top={getPosition(timeToShow, time, height) + offsetFromTop}
          position={
            startScrollY + getPosition(timeToShow, time, height) + offsetFromTop
          }
          timeToShow={timeToShow}
          {...rest}
        />
      ))}
      <EndedStep height={height} startScrollY={startScrollY} />
    </>
  )
}
