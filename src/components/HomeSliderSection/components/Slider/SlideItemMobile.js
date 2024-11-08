import React from "react"
import styled from "styled-components"
import * as types from "prop-types"

import { typographyCss } from "../../../atoms"
import { default as mixins } from "../../../../styles/mixins"
import { getRem } from "../../../../utils"
import { SlideItem } from "./SlideItem"
import { useFormatMessage } from "../../../../hooks"
import { size } from "../../../../styles"

const ItemContainer = styled.div`
  position: relative;
  ${mixins.displayFlex("column", "center", "center")};
  background-color: var(--white-color);
  padding: 0 30px;
  width: 100%;
  cursor: pointer;

  @media (min-width: ${size.mobileXL}px) and (max-width: ${size.tablet}px) {
    max-width: 480px;
    margin: 0 auto;
  }
`

const StyledTitle = styled.div`
  ${mixins.displayFlex("row", "center", "center")};
  width: 100%;
  font-size: ${getRem(20)};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: ${getRem(29.6)};
  color: var(--darkfont-color);
  text-align: center;
`

const Text = styled.p`
  ${typographyCss};
  font-family: Roboto, sans-serif;
`

export const SlideItemMobile = ({ slide }) => {
  const f = useFormatMessage()

  return (
    <ItemContainer>
      <StyledTitle>{f(slide.title)}</StyledTitle>
      <Text lineHeight={21} size={13} marginY={0} align="center">
        {f(slide.text)}
      </Text>
    </ItemContainer>
  )
}

SlideItem.propTypes = {
  slide: types.object.isRequired,
}
