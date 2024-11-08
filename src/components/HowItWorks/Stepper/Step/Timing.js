import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { formatNumber } from "../helpers"

import TimerIcon from "../../../../assets/svg/timer.inline.svg"
import { Text } from "../../../atoms"
import { device } from "../../../../styles"

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ contentSide }) =>
    contentSide === "left" ? "flex-end" : "initial"};
  width: calc(50% - 9px);
  order: ${({ contentSide }) => (contentSide === "left" ? 1 : 3)};
  margin-top: 18.5px;

  @media ${device.tablet} {
    width: calc(50% - 26px);
  }
`

const TimingS = styled(motion.div)`
  width: 154px;
  height: 37px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  align-items: center;
  background-color: var(--timingbg-color);
  border-radius: 10px;
  padding-left: 9px;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TimeText = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: var(--blue-color);
`

export const Timing = ({ time, contentSide }) => {
  return (
    <Wrapper contentSide={contentSide}>
      <TimingS
        transition={{ ease: "easeOut", duration: 0.3 }}
        animate={"open"}
        initial="closed"
        variants={{
          closed: { scale: 0, opacity: 0 },
          open: { scale: 1, opacity: 1 },
        }}
      >
        <TimerIcon height={22} width={22} />
        <TimeWrapper>
          <TimeText marginY={0}>
            {formatNumber(time.m)}m {formatNumber(time.s)}s{" "}
            {formatNumber(time.ms)}ms
          </TimeText>
        </TimeWrapper>
      </TimingS>
    </Wrapper>
  )
}
