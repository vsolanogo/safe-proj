import React, { useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
 
import button from "../../../assets/images/button-steeper.png"
import buttonGif from "../../../assets/gif/button-steeper.gif"
import { handleScroll, removeHandleScroll, scrollTo } from "./helpers"
import { ClickPointer } from "./ClickPointer"

const Wrapper = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;

  .gif_player {
    pointer-events: ${({ disableGifPlayer }) => disableGifPlayer && "none"};
  }
`

 
const preventEvent = e => {
  e.preventDefault()
}

export const Controller = ({ isStart, setStart, thresholdFromCenter }) => {
  const ref = useRef()
  const wrapperRef = useRef()

  const handleToggle = useCallback(
    shouldScroll => {
      if (!isStart) {
        setStart(true)
        shouldScroll && scrollTo(wrapperRef.current, 180)
      }
    },
    [isStart, setStart, wrapperRef]
  )

  let protoStarted = false

  const setStartOnScroll = useCallback(
    e => {
      if (
        e.view.pageYOffset + (e.deltaY || 0) > thresholdFromCenter &&
        !protoStarted
      ) {
        protoStarted = !protoStarted

        ref.current.toggle()
        preventEvent(e)
        // handleScroll(preventEvent)
        // setTimeout(() => removeHandleScroll(preventEvent), 1200)

        handleToggle()
      }
    },
    [wrapperRef, thresholdFromCenter]
  )

  useEffect(() => {
    !isStart && handleScroll(setStartOnScroll)
    isStart && removeHandleScroll(setStartOnScroll)

    return () => removeHandleScroll(setStartOnScroll)
  }, [isStart, setStartOnScroll])

  return (
    <Wrapper disableGifPlayer={isStart} ref={wrapperRef}>

      <ClickPointer isStart={isStart} />
    </Wrapper>
  )
}
