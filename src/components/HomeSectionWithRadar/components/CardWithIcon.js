import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { getRem } from "../../../utils"
import { Text, Title } from "../.."
import { useFormatMessage } from "../../../hooks"
import { default as mixins } from "../../../styles/mixins"

const Container = styled(motion.div)`
  ${mixins.displayFlex("row", "flex-start", "center")};
  min-height: ${getRem(131)};
  max-width: ${getRem(440)};
  background-color: var(--white-color);
  border-radius: ${getRem(10)};
  box-shadow: 5px 10px 15px var(--cardshadow-color);
  padding: ${getRem(18)} ${getRem(34)} ${getRem(18)} ${getRem(36.5)};
  transition: all 0.3s linear;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    box-shadow: 10px 25px 36px var(--cardshadow-color);
  }
`

const TitleS = styled(Title)`
  font-size: ${getRem(20)};
  font-family: Roboto, sans-serif;
  font-weight: 700;
`

const TextS = styled(Text)`
  font-size: ${getRem(13)};
  line-height: ${getRem(21)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
`

const ContentContainer = styled.div`
  height: 100%;
  margin-left: ${getRem(38.45)};
`

export const CardWithIcon = ({ name, icon: Icon, animation, ...restProps }) => {
  const f = useFormatMessage()
  return (
    <Container variants={animation} {...restProps}>
      <Icon />
      <ContentContainer>
        <TitleS as="h3" lineHeight={29.6} marginY={0}>
          {f(`home.section2.card.${name}`)}
        </TitleS>
        <TextS marginY={0}> {f(`home.section2.card.${name}.text`)} </TextS>
      </ContentContainer>
    </Container>
  )
}
