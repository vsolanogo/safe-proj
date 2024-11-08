import React, { useEffect, useState } from "react"

import { cardWithIcon } from "../../HomeSectionWithRadar/styles/cardWithIcon"
import { graphql, StaticQuery } from "gatsby"
import ChatIcon from "../../../assets/svg/block-icons/block_5.inline.svg"
import ShieldCheckIcon from "../../../assets/svg/block-icons/block_6.inline.svg"
import BrandLogoIcon from "../../../assets/svg/block-icons/block_1.inline.svg"
import styled, { keyframes, css } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useFormatMessage } from "../../../hooks"
import { getRem } from "../../../utils"
import { default as mixins } from "../../../styles/mixins"
import { size } from "../../../styles"

const TitleS = styled.h1`
  font-size: 1.25rem;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: rgb(24, 25, 48);
  margin: 0;
`

const TextS = styled.p`
  font-size: 0.8125rem;
  line-height: 1.3125rem;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  margin: 0;
`

const ContentContainer = styled.div`
  height: 100%;
  margin-left: 2.403rem;
`

const a2 = keyframes`
   0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
`

const a3 = keyframes`
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
`

const StyledFloatingShape = styled.div`
  width: ${({ width }) => width};
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex || 1};
  transform: translateY(0px);

  &.floating-shape {
    @media (min-width: ${size.tablet}px) and (max-width: ${size.laptopS}px) {
      &_right {
        right: 0;
        bottom: 50%;
      }
      &_top {
        top: 5%;
      }
    }
    @media (max-width: ${size.tablet}px) {
      &_bottom {
        display: none;
      }
    }
  }
  @media (max-width: ${size.mobileXL}px) {
    display: none;
  }

  animation-play-state: paused;

  &[data-anim2="true"] {
    animation: ${a2} 6s ease-in-out infinite normal forwards;
  }

  &[data-anim3="true"] {
    animation: ${a3} 6s ease-in-out infinite normal forwards;
  }

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const Container = styled.div`
  ${mixins.displayFlex("row", "flex-start", "center")};
  right: 0;
  top: 15%;
  min-height: ${getRem(131)};
  max-width: ${getRem(440)};
  background-color: var(--white-color);
  border-radius: ${getRem(10)};
  box-shadow: 5px 10px 15px var(--cardshadow-color);
  padding: ${getRem(18)} ${getRem(34)} ${getRem(18)} ${getRem(36.5)};
  filter: opacity(0);
  transform: translateY(0);
  transition: all 1s ease-out 3s;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    box-shadow: 10px 25px 36px var(--cardshadow-color);
  }

  ${cardWithIcon};

  &[data-visible="true"] {
    filter: opacity(1);
    transform: translateY(-20px);
  }
`

const GWrapper = styled.div`
  filter: opacity(0);
  transition: all 1s ease-out;
  transition-delay: 3.5s;

  &[data-runanim="true"] {
    filter: opacity(1) !important;
  }
`

const Component = ({ inView, imgs }) => {
  const f = useFormatMessage()

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!visible && inView) {
      setVisible(true)
    }
  }, [inView])

  return (
    <>
      <Container className="block-icon-1" data-visible={visible}>
        <ChatIcon />
        <ContentContainer>
          <TitleS as="h3" lineHeight={29.6}>
            {f(`home.section2.card.contacts`)}
          </TitleS>
          <TextS> {f(`home.section2.card.contacts.text`)} </TextS>
        </ContentContainer>
      </Container>

      <StyledFloatingShape
        className="floating-shape_top"
        width="148px"
        top="10%"
        left="5%"
        data-runanim={inView}
        data-anim2={inView}
        data-visible={visible}
      >
        <GWrapper data-runanim={visible}>
          <GatsbyImage image={getImage(imgs.slideTube)} alt="Tube image" />
        </GWrapper>
      </StyledFloatingShape>

      <Container
        className="block-icon-2"
        css={`
          margin-top: 25rem;
        `}
        data-runanim={inView}
        data-visible={visible}
      >
        <BrandLogoIcon />
        <ContentContainer>
          <TitleS as="h3" lineHeight={29.6}>
            {f(`home.section2.card.safety`)}
          </TitleS>
          <TextS> {f(`home.section2.card.safety.text`)} </TextS>
        </ContentContainer>
      </Container>

      <StyledFloatingShape
        className="floating-shape_right"
        width="182.58px"
        bottom="calc(50% - 65px)"
        right="8.6%"
        data-runanim={inView}
        data-anim3={inView}
        data-visible={visible}
      >
        <GWrapper data-runanim={visible}>
          <GatsbyImage
            image={getImage(imgs.slideTriangle)}
            alt="Triangle image"
          />
        </GWrapper>
      </StyledFloatingShape>

      <Container
        css={`
          @media (min-width: 768px) {
            bottom: 5rem;
            top: unset;
          }
        `}
        data-runanim={inView}
        data-visible={visible}
      >
        <ShieldCheckIcon />
        <ContentContainer>
          <TitleS as="h3" lineHeight={29.6}>
            {f(`home.section2.card.userExperience`)}
          </TitleS>
          <TextS> {f(`home.section2.card.userExperience.text`)} </TextS>
        </ContentContainer>
      </Container>

      <StyledFloatingShape
        className="floating-shape_bottom"
        width="83px"
        bottom="15%"
        left="10%"
        data-runanim={inView}
        data-visible={visible}
        data-anim3={inView}
      >
        <GWrapper data-runanim={visible}>
          <GatsbyImage
            image={getImage(imgs.slideBlackCube)}
            alt="Black cube image"
          />
        </GWrapper>
      </StyledFloatingShape>
    </>
  )
}

export const CardsContainer = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          slideTube: file(relativePath: { eq: "slider/slide-tube.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 200
                placeholder: NONE
                formats: [PNG]
                quality: 70
              )
            }
          }

          slideTriangle: file(
            relativePath: { eq: "slider/slide-triangle.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 200
                placeholder: NONE
                formats: [PNG]
                quality: 70
              )
            }
          }

          slideBlackCube: file(
            relativePath: { eq: "slider/slide-black-cube.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 130
                placeholder: NONE
                formats: [PNG]
                quality: 70
              )
            }
          }
        }
      `}
      render={imgs => <Component imgs={imgs} {...props} />}
    />
  )
}
