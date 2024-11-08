import React from "react"
import styled from "styled-components"

import { getRem } from "../../utils"
import { blockCss } from "./helpers"
import wavesPattern from "../../assets/svg/waves-pattern.svg"
import Gift from "../../assets/svg/gift.inline.svg"
import { Title, Button } from "../"
import { theme, device } from "../../styles"
import { useFormatMessage } from "../../hooks"

const Wrapper = styled.div`
  ${blockCss}
  padding: ${getRem(31)} ${getRem(23)} ${getRem(30)} ${getRem(30)};
  background: var(--darkfont-color);
  background-image: url(${wavesPattern});
  background-repeat: no-repeat;
  background-position: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${getRem(15)};
  grid-template-rows: 1fr min-content;

  align-items: center;
  width: 100%;

  @media ${device.tablet} {
    padding: ${getRem(37)} ${getRem(30)} ${getRem(37)} ${getRem(38)};
    grid-row-gap: ${getRem(42)};
    grid-column-gap: ${getRem(63)};
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const GiftS = styled(Gift)`
  display: none;

  @media ${device.tablet} {
    display: block;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 1;
  }
`

export const Block1 = () => {
  const f = useFormatMessage()
  return (
    <Wrapper>
      <GiftS />
      <Title as="h2" color={theme.colors.white} lineHeight={41}>
        {f("formSection.block1.title")}
      </Title>
      <Button
        style={{ alignSelf: "self-start" }}
        as="a"
        type="blue"
        width={142}
        height={48}
      >
        {f("formSection.block1.button")}
      </Button>
    </Wrapper>
  )
}
