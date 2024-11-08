import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { Controller } from "./Controller"
import { Body } from "./Body"
import { useWindowSize } from "../../../hooks"
import { getRem } from "../../../utils"
import { size } from "../../../styles"

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${getRem(57)};
  width: 100%;
`

const getHeight = width => {
  switch (true) {
    case width < size.tablet:
      return 1931
    case width < size.laptop:
      return 1075
    default:
      return 1075
  }
}

export const Stepper = () => {
  const [isStart, setStart] = useState(false)
  const { width } = useWindowSize()
  const [height, setHeight] = useState()

  useEffect(() => {
    setHeight(getHeight(width))
  }, [width])

  return (
    <Wrapper>
      <Controller
        isStart={isStart}
        setStart={setStart}
        thresholdFromCenter={310}
      />
      <Body isStart={isStart} height={height} time={25} offsetFromTop={38} />
    </Wrapper>
  )
}
