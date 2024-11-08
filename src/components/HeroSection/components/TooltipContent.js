import React, { useState, useEffect } from "react"
import { getRem } from "../../../utils"
import { useFormatMessage } from "../../../hooks"
import styled, { keyframes, css } from "styled-components"
import { isMacOs, isSafari } from "react-device-detect"

const Wrapper = styled.div`
  grid-column-gap: ${getRem(11)};
  grid-row-gap: ${getRem(3)};
  padding: 17px 17px 17px 11px;
  background-color: #fff;
  border-radius: ${getRem(10)};
  z-index: 99;
  min-width: 272px;
  min-height: 88px;
  display: flex;
  align-items: center;
`

const Title = styled.p`
  font-family: "Nanotech", Arial, Helvetica, sans-serif;
  color: #181930;
  margin: 0 0 6px 0;
  font-size: 14px;
  font-weight: 600;
`

const TextP = styled.p`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #181930;
  font-size: 11px;
  line-height: 15px;
  color: #181930;
  margin: 0;
  font-weight: 500;

  &[data-safariweight="true"] {
    font-weight: 400;
  }
`

export const TooltipContent = ({ title, text, imgComponent, ...rest }) => {
  const [safariWeight, setSafariWeight] = useState(false)

  const f = useFormatMessage()

  useEffect(() => {
    setSafariWeight(isMacOs && isSafari)
  }, [])

  return (
    <Wrapper {...rest}>
      {imgComponent()}
      <div
        css={`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 7px;
        `}
      >
        <Title>{f(title)}</Title>
        <TextP data-safariweight={safariWeight}>{f(text)}</TextP>
      </div>
    </Wrapper>
  )
}
