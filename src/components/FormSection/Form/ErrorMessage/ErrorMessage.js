import React from "react"
import styled from "styled-components"
import { getRem } from "../../../../utils"
import { useFormatMessage } from "../../../../hooks"

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${getRem(12)};
  padding: ${getRem(2)} ${getRem(22)} 0;
  color: #9E0019;
`

export const ErrorMessage = ({ error }) => {
  const f = useFormatMessage()

  return (
    <Error>
      {f(error)}
    </Error>
  )
}