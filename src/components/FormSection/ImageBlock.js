import React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { size, theme } from "../../styles"
import formImageBlockAnimation from "../../assets/animations/form-section-animation"
import { TextP, TitleH1 } from "../atoms"
import { getRem } from "../../utils"
import { marketsLinks } from "../../config"
import { useFormatMessage } from "../../hooks"
import { default as mixins } from "../../styles/mixins"
import { LottieComponent } from "./Lottie"

const ImgBlockWrapper = styled.div`
  position: relative;
  ${mixins.displayFlex("column", "center", "center")};

  &:after {
    content: "";
    ${mixins.positionAbsolute(0, 0)};
    width: 1px;
    height: 100%;
    background: #e4e4e4;

    @media (max-width: ${size.tablet}px) {
      height: 1px;
      width: calc(100% - 60px);
      ${mixins.positionAbsolute("unset", "30px", 0)};
    }
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    padding: 0 15px;
  }

  @media (max-width: ${size.tablet}px) {
    padding-bottom: 30px;
    width: 100%;
  }
`

const StyledText = styled(TextP)`
  font-family: Roboto, sans-serif;
  max-width: 368px;
  margin-bottom: 20px;
  padding: 0 15px;
`

const ButtonWrapper = styled.div`
  ${mixins.displayFlex("row", "center", "center")};
`

const StyledLink = styled.a`
  width: ${getRem(167)};
  height: ${getRem(60)};
  ${mixins.displayFlex("row", "center", "center")};
  background-color: transparent;
  color: var(--grayfont-color);
  border: 1px solid var(--borderlight-color);
  border-radius: 11px;
  font-size: ${getRem(14)};
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: ${getRem(21)};
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid var(--blue-color);
  }

  &:first-child {
    margin-right: ${getRem(20)};
  }

  i {
    font-size: ${getRem(23.5)};
    color: var(--mainblack-color);
  }

  span {
    margin-left: ${getRem(17)};
    span {
      color: var(--mainblack-color);
      font-family: Inter, sans-serif;
      font-weight: 600;
      margin: 0;
    }
  }

  @media (max-width: ${size.mobileM}px) {
    width: ${getRem(147)};
    &:first-child {
      margin-right: ${getRem(10)};
    }
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptopS}px) {
    width: ${getRem(147)};
    &:first-child {
      margin-right: ${getRem(10)};
    }
  }
`

const LottieContainer = styled.div`
  position: relative;
  > div {
    width: 200px;
    height: 244px;
  }
`

const StoreButton = ({ href, children }) => (
  <StyledLink rel="noopener noreferrer" target="_blank" href={href}>
    {children}
  </StyledLink>
)

export const ImageBlock = () => {
  const f = useFormatMessage()

  return (
    <ImgBlockWrapper>
      <LottieContainer>
        <LottieComponent />
      </LottieContainer>
      <TitleH1 as="h2" lineHeight={36} size={30} weight={400} align="center">
        {f("formSection.leftBlock.title")} <strong>SoSafe</strong>
      </TitleH1>
      <StyledText lineHeight={25} size={14} align="center" weight={300}>
        {f("formSection.leftBlock.text")}
      </StyledText>
      <ButtonWrapper>
        <StoreButton href={marketsLinks.apple}>
          <i className="icon-apple" />
          <span>
            {f("formSection.leftBlock.buttonText")} <br />
            <span>App Store</span>
          </span>
        </StoreButton>
        <StoreButton href={marketsLinks.google}>
          <i className="icon-android" />
          <span>
            {f("formSection.leftBlock.buttonText2")} <br />
            <span>Google play</span>
          </span>
        </StoreButton>
      </ButtonWrapper>
    </ImgBlockWrapper>
  )
}
