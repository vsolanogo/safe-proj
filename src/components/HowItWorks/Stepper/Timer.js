import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { getTime } from "./helpers"
import TimerIcon from "../../../assets/svg/timer.inline.svg"
import { Text } from "../../atoms"
import { useCheckIsEnd } from "./useCheckIsEnd"
import { theme } from "../../../styles"

const Wrapper = styled(motion.div)`
  width: 177px;
  height: 54px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  align-items: center;
  position: absolute;
  background-color: var(--white-color);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 2px 24px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 9px 16px 10px 16px;
  z-index: 1;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TextS = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.stepperFontColor};
`

const TimeText = styled(Text)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 3px;
  color: var(--blue-color);
`

const formatNumber = num => (num <= 9 ? `0${num}` : `${num}`)

export const Timer = ({
  heightLine,
  height,
  time,
  offsetFromTop,
  startScrollY,
}) => {
  const [startEndedAnm, setStartEndedAnm] = useState(false)
  const [currTime, setCurrTime] = useState({ m: 0, s: 0, ms: 0 })
  const isEnded = useCheckIsEnd(height, startScrollY, "timer")

  useEffect(() => {
    heightLine.onChange(val => {
      const prevVal = heightLine?.get()
      if (prevVal > val) return
      setCurrTime(getTime(val - offsetFromTop, time, height - offsetFromTop))
    })
  }, [heightLine, setCurrTime, height, offsetFromTop, time])

  useEffect(() => {
    let timer
    if (isEnded) {
      timer = setTimeout(() => {
        heightLine.destroy()
        setStartEndedAnm(true)
      }, 30)
    }

    return () => clearTimeout(timer)
  }, [isEnded, heightLine])

  return (
    <Wrapper
      transition={{ ease: "easeOut", duration: isEnded ? 1.3 : 0.3 }}
      animate={startEndedAnm ? "end" : "start"}
      initial={{ opacity: 1 }}
      style={{ y: !startEndedAnm && heightLine }}
      variants={{
        start: { opacity: 1 },
        end: {
          y: height + 180,
          backgroundColor: theme.colors.blue,
        },
      }}
    >
      <TimerIcon {...(startEndedAnm && { fill: theme.colors.white })} />
      <TimeWrapper>
        <TextS
          style={{ color: startEndedAnm && theme.colors.white }}
          marginY={0}
        >
          {startEndedAnm ? "SoSafe save time" : "Time"}
        </TextS>
        <TimeText
          style={{ color: startEndedAnm && theme.colors.white }}
          marginY={0}
        >
          {formatNumber(currTime.m)}m {formatNumber(currTime.s)}s{" "}
          {formatNumber(currTime.ms)}ms
        </TimeText>
      </TimeWrapper>
    </Wrapper>
  )
}
