import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import Star from "../../assets/svg/star.inline.svg"

const StarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  grid-gap: 1.71px;
  margin-bottom: 3px;
`

export const Stars = () => {
  const starsArr = Array(5).fill(1)

  return (
    <StarsWrapper>
      {starsArr.map(() => (
        <Star key={uuid()} />
      ))}
    </StarsWrapper>
  )
}