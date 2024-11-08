import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { animation } from "../../config"
import { CardWithMedia } from "./CardWithMedia"
import { useAnimationInView } from "../../hooks"
import { device } from "../../styles"
import { getRem } from "../../utils"

const Wrapper = styled(motion.div)`


  display: grid;
  justify-content: center;
  row-gap: ${getRem(10)};
  margin-top: ${getRem(26)};
  column-gap: ${getRem(16)};
  grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));

  @media ${device.tablet} {
    margin-top: ${getRem(32)};
    row-gap: ${getRem(16)};
  }
`

export const ListCards = ({ content }) => {
  const { ref, controls } = useAnimationInView("visible")

  return (
    <Wrapper
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animation.cards.container}
    >
      {content.map(el => (
        <CardWithMedia key={el.id} {...el} />
      ))}
    </Wrapper>
  )
}
