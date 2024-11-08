import React from "react"
import * as types from "prop-types"
import styled from "styled-components"

import { default as mixins } from "../../../../styles/mixins"
import { typographyCss } from "../../../atoms"
import { getRem } from "../../../../utils"
import { useFormatMessage } from "../../../../hooks"
import { slideItemContainerCss } from "../../styles/styles"

const ItemContainer = styled.li`
  ${slideItemContainerCss};
`

const StyledTitle = styled.div`
  ${mixins.displayFlex("row", "space-between", "center")};
  width: 100%;
  font-size: ${getRem(20)};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: 148%;
  color: var(--darkfont-color);
`

const StyledIcon = styled.i`
  font-size: ${getRem(13.41)};
  color: var(--borderlight-color);
  transition: color 0.2s linear;
`

const Text = styled.p`
  ${typographyCss};
  font-family: Roboto, sans-serif;
  margin: 0;
`

export const SlideItem = React.memo(
  ({ slide, className, onClick }) => {
    const f = useFormatMessage()

    return (
      <ItemContainer className={className} onClick={onClick}>
        <StyledTitle>
          {f(slide.title)}
          <StyledIcon className="icon-vector-arrow" />
        </StyledTitle>
        <Text lineHeight={21} size={13} marginY={0} weight={400}>
          {f(slide.text)}
        </Text>
        <span />
      </ItemContainer>
    )
  },
  (next, prev) => next.slide === prev.slide && next.className === prev.className
)

SlideItem.propTypes = {
  slide: types.object.isRequired,
  className: types.string.isRequired,
  onClick: types.func.isRequired,
}
