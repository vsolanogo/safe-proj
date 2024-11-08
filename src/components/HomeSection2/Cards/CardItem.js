import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { getRem } from "../../../utils"
import { Text, Title } from "../.."
import { useFormatMessage } from "../../../hooks"

const Container = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr min-content 1fr;
  grid-template-columns: 1fr;
  min-height: ${getRem(241)};
  background-color: var(--white-color);
  border-radius: ${getRem(10)};
  box-shadow: 5px 10px 15px var(--cardshadow-color);
  padding: ${getRem(30)} ${getRem(32)} ${getRem(35)} ${getRem(24)};
  transform: scale(1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 10px 25px 36px var(--cardshadow-color);
  }
`

const TextS = styled(Text)`
  line-height: ${getRem(21)};
`

export const CardItem = ({ name, icon: Icon, animation }) => {
  const f = useFormatMessage()
  return (
    <Container variants={animation}>
      <Icon />
      <Title as="h3" lineHeight={32} marginY={0}>
        {f(`home.section2.card.${name}`)}
      </Title>
      <TextS marginY={0}> {f(`home.section2.card.${name}.text`)} </TextS>
    </Container>
  )
}
