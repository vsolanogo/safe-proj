import React from "react"
import styled from "styled-components"

import { TextS, TitleS } from "../styles"
import { ContentIcon } from "./ContentIcon"
import { device } from "../../../../styles"
import { useFormatMessage } from "../../../../hooks"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 13px;
  width: calc(50% - 9px);
  order: ${({ contentSide }) => (contentSide === "left" ? 3 : 1)};
  text-align: ${({ contentSide }) =>
    contentSide === "left" ? "initial" : "right"};

  div {
    justify-self: ${({ contentSide }) =>
      contentSide === "left" ? "initial" : "flex-end"};
  }

  @media ${device.tablet} {
    width: calc(50% - 26px);
    grid-template-rows: auto;
    grid-template-columns: ${({ contentSide }) =>
      contentSide === "left" ? "auto 1fr" : "1fr auto"};
    grid-column-gap: ${({ contentSide }) =>
      contentSide === "left" ? 27 : 16}px;
    direction: ${({ contentSide }) =>
      contentSide === "left" ? "initial" : "rtl"};
    justify-content: ${({ contentSide }) =>
      contentSide === "left" ? "initial" : "flex-end"};
    align-items: initial;
  }
`

export const Content = ({ contentSide, icon, title, text }) => {
  const f = useFormatMessage()
  return (
    <Wrapper contentSide={contentSide}>
      <ContentIcon icon={icon} />
      <div>
        <TitleS>{f(title)}</TitleS>
        <TextS marginY={4}>{f(text)}</TextS>
      </div>
    </Wrapper>
  )
}
