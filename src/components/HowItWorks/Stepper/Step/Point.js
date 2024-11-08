import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { device } from "../../../../styles"

const PointS = styled(motion.div)`
  height: 10px;
  width: 10px;
  border: 2px solid var(--white-color);
  background-color: var(--blue-color);
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 24px rgba(0, 0, 0, 0.08);
  margin: 0 9px;
  order: 2;

  @media ${device.tablet} {
    margin: 0 21px;
  }
`

export const Point = React.memo(({ initial, style }) => {
  return (
    <PointS
      style={style}
      transition={{ ease: "easeOut", duration: 0.3 }}
      animate={initial ? "open" : "closed"}
      initial="closed"
      variants={{
        closed: { scale: 0, opacity: 0 },
        open: { scale: 1, opacity: 1 },
      }}
    />
  )
})
