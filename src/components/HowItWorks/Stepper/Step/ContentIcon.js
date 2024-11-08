import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const IconWrapper = styled(motion.div)`
  width: 74px;
  height: 74px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-color);
  position: ${({ position }) => position && "absolute"};
  top: ${({ position }) => position && `${position}px`};
`

export const ContentIcon = React.memo(({ icon: Icon, position }) => {
  return (
    <IconWrapper
      position={position}
      transition={{ ease: "easeOut", duration: 0.3 }}
      animate={"open"}
      initial="closed"
      variants={{
        closed: { scale: 0, opacity: 0 },
        open: { scale: 1, opacity: 1 },
      }}
    >
      <Icon />
    </IconWrapper>
  )
})
