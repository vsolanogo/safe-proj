import React from "react"
import * as types from "prop-types"
import Img from "gatsby-image"
import { useFormatMessage } from "../../../hooks"
import { getRem } from "../../../utils"
import { theme, size } from "../../../styles"
import { typographyCss } from "../../atoms/typography"
import styled, { keyframes, css } from "styled-components"

const a1 = keyframes`
  0% {
    filter: opacity(0);
    transform: translateY(20px)
  }

  100% {
    filter: opacity(1);
    transform: translateY(0px)
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 280px;
  min-height: ${getRem(274)};
  border-radius: 10px;
  background-color: #131313;
  margin: 0 10px 10px 0;
  width: calc(50% - 5px);
  &:nth-child(2) {
    margin-right: 0;
  }

  @media (min-width: 600px) and (max-width: ${size.laptopS}px) {
    width: calc(50% - 5px);
    max-width: unset;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 0 25px 0;
  }

  filter: opacity(0);
  transform: translatey(20px);
  animation: ${a1};
  animation-play-state: paused;
  animation-fill-mode: forwards;
  animation-direction: ease-out;
  animation-duration: 1000ms;
  animation-delay: ${({ animationDelay }) =>
    animationDelay ? animationDelay : "1500ms"};

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -16%;
  background-color: transparent;

  @media (max-width: ${size.mobileXL}px) {
    top: -13%;
  }

  @media (max-width: ${size.mobileM}px) {
    top: -15%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  padding: 30px 25px;
  margin-top: 121px;
`

const TitleS = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 0;
  ${typographyCss};
`

const TextS = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  margin-bottom: 0;
  ${typographyCss};
`

const pulse = keyframes`
  0% {
    transform: scale(0.85);
  }

  50% {
    transform: scale(1);
  }
  
  100% {    
    transform: scale(0.85);
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: calc(50% - 24px);
  bottom: -24px;
  transform: scale(1);
  width: 48px;
  height: 48px;
  background-color: var(--blue-color);
  border-radius: 50%;
  box-shadow: -0.790824px 5.53577px 31px rgba(80, 110, 250, 0.5);
  animation: ${pulse} 6s infinite;
`

export const CardWithImage = ({
  image,
  title,
  text,
  icon: Icon,
  runAnimation,
  animationDelay,
}) => {
  const f = useFormatMessage()

  return (
    <Container data-runanim={runAnimation} animationDelay={animationDelay}>
      <ImageWrapper>
        <Img fluid={image.fluid} />
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </ImageWrapper>
      <ContentWrapper>
        <TitleS as="h4" lineHeight={32} color={theme.colors.white}>
          {f(title)}
        </TitleS>
        <TextS size={13} lineHeight={21} color={theme.colors.white}>
          {f(text)}
        </TextS>
      </ContentWrapper>
    </Container>
  )
}

CardWithImage.propTypes = {
  image: types.object.isRequired,
  title: types.string.isRequired,
  text: types.string.isRequired,
  icon: types.func.isRequired,
}
