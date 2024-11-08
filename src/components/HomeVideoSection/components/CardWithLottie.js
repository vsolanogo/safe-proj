import React from "react"
import styled from "styled-components"
import * as types from "prop-types"
import { useInView } from "react-intersection-observer"

import runningServerAnimation from "../../../assets/animations/running-server"
import { default as mixins } from "../../../styles/mixins"
import { useFormatMessage } from "../../../hooks"
import { getRem } from "../../../utils"
import { theme } from "../../../styles"
import { LottieComponent } from "../../Lottie/Lottie"
import { typographyCss } from "../../atoms"

const Container = styled.div`
  position: relative;
  ${mixins.displayFlex("row", "space-between", "center")};
  width: 100%;
  min-height: ${getRem(120)};
  border-radius: 10px;
  background-color: ${theme.colors.cardBgColor};
  padding: 22px 43px;
  
  @media (max-width: 600px) {
    padding: 22px 25px;
    max-width: 280px;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  padding-left: 150px;
  
  @media (max-width: 600px) {
    padding: 120px 0 0 0;
  }
`

const TitleS = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 0;
  ${typographyCss}
`

const TextS = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  margin-bottom: 0;
  ${typographyCss}
`

const LottieContainer = styled(LottieComponent)`
  width: 165px;
  height: 165px;
  position: absolute;
  bottom: 5px;
  left: 12px;
  
  &:before {
    left: 67px;
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #232333;
    border-radius: 3px;
    transform: rotate(45deg) skew(-15deg, -15deg);
    bottom: 40px;
    z-index: 2;
  }
  
  @media (max-width: 600px) {
    bottom: unset;
    top: -20px;
    left: calc(50% - 82.5px);
  }
`

export const CardWithLottie = ({ title, text, ...restProps }) => {
  const f = useFormatMessage()
  const [ref, inView] = useInView()

  return (
    <Container
      ref={ref}
      { ...restProps }
    >
      {inView && <LottieContainer animationData={runningServerAnimation} />}
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

CardWithLottie.propTypes = {
  title: types.string.isRequired,
  text: types.string.isRequired,
}