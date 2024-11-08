import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { CardItem } from "./CardItem"
import { content } from "./content"
import { getRem } from "../../../utils"
import { useAnimationInView } from "../../../hooks"
import { device } from "../../../styles"
import { animation } from "../../../config"

const Container = styled(motion.div)`


  display: grid;
  justify-content: center;
  row-gap: ${getRem(24)};
  margin-top: ${getRem(15)};
  column-gap: ${getRem(16)};
  grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));

  @media ${device.tablet} {
    margin-top: ${getRem(59)};
    row-gap: ${getRem(16)};
  }

  @media ${device.laptop} {
    margin-top: ${getRem(59)};
    row-gap: ${getRem(30)};
  }
`

export const Cards = () => {
  const { ref, controls } = useAnimationInView("visible")

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animation.cards.container}
    >
      {content.map(({ name, icon }) => (
        <CardItem
          animation={animation.cards.item}
          key={name}
          name={name}
          icon={icon}
        />
      ))}
    </Container>
  )
}
