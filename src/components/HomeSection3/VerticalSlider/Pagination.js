import React, { useMemo } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "styled-components"

import { getRem } from "../../../utils"
import { Text } from "../.."

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${getRem(470)};
  width: ${getRem(17)};
  padding: ${getRem(0)} ${getRem(6)};
`

const Axis = styled.div`
  height: ${({ height }) => height}px;
  width: ${getRem(1)};
  background: var(--white-color);
  border-radius: ${getRem(30)};
  position: relative;
  z-index: 1;
`

const Thumb = styled(motion.span)`
  position: absolute;
  width: ${getRem(5)};
  left: ${getRem(-1.5)};
  height: ${({ height }) => getRem(height)};
  border-radius: ${getRem(30)};
  background: var(--darkfont-color);
`

const config = {
  axisH: 402,
  gap: 20,
}

export const Pagination = ({ length, containerRect }) => {
  const thumbH = useMemo(
    () => (config.axisH - config.gap * (length - 1)) / length,
    [length]
  )

  const { scrollY } = useViewportScroll()

  const positionY = useTransform(
    scrollY,
    [containerRect?.top, containerRect?.bottom - 112 - 740],
    [0, config.axisH - thumbH]
  )

  return (
    <Wrapper>
      <Text weight="bold" marginY={9} as="span">
        01
      </Text>
      <Axis height={config.axisH}>
        <Thumb id="scroll" height={thumbH} style={{ y: positionY, x: -1 }} />
      </Axis>
      <Text weight="bold" marginY={9} as="span">
        0{length}
      </Text>
    </Wrapper>
  )
}
