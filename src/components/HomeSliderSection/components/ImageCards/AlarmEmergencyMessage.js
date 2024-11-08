import React from "react"
import { default as mixins } from "../../../../styles/mixins"
import { useFormatMessage } from "../../../../hooks"
import { getRem } from "../../../../utils"
import { TextP } from "../../../atoms"
import { theme, size } from "../../../../styles"
import { AnchorLink } from "../../../index"
import styled, { keyframes, css } from "styled-components"

const MessageContainer = styled.div`
  position: relative;
  ${mixins.displayFlex("column", "center", "flex-start")};
  width: 100%;
  height: auto;
  padding: 19px 24px;
  background-color: var(--white-color);
  box-shadow: 18px 25px 50px ${theme.colors.blackShadow};
  border-radius: 15px;

  @media (max-width: ${size.tablet}px) {
    padding: 10px 15px;
  }
`

const StyledText = styled(TextP)`
  @media (max-width: ${size.tablet}px) {
    font-size: ${getRem(10)};
  }
`

const StyledTitle = styled.span`
  font-size: ${getRem(10)};
  line-height: ${getRem(21)};
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: var(--blue-color);
`

const IconWrapper = styled.div`
  ${mixins.displayFlex("row", "center", "center")};
  ${mixins.positionAbsolute("-12px", null, null, "-12px")};
  width: ${getRem(28)};
  height: ${getRem(28)};
  background-color: ${theme.colors.red};
  border-radius: 50%;
  box-shadow: 0 3.29412px 3.29412px ${theme.colors.iconShadow};

  i {
    color: var(--white-color);
    font-size: ${getRem(16)};
    ${mixins.displayFlex("row", "center", "center")};
  }
`

export const AlarmEmergencyMessage = () => {
  const f = useFormatMessage()

  return (
    <MessageContainer>
      <IconWrapper>
        <i className="icon-attention" />
      </IconWrapper>
      <StyledTitle>
        {f("home.sliderSection.emergencyMessage.title")}
      </StyledTitle>
      <StyledText
        size={14}
        lineHeight={21}
        weight={500}
        marginX={0}
        marginY={0}
        color={theme.colors.black}
      >
        {f("home.sliderSection.emergencyMessage.text")}
      </StyledText>
      <AnchorLink
        href="https://alarm.sosafe.se/ZSRI7SV1"
        rel="noopener noreferer"
        target="_blank"
      >
        alarm.sosafe.se/ZSRI7SV1
      </AnchorLink>
    </MessageContainer>
  )
}
