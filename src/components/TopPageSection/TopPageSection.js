import React, { useMemo, useEffect, useState } from "react"
import styled from "styled-components"
import * as types from "prop-types"
import { Link } from "gatsby-plugin-intl"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  device,
  fadeIn,
  fadeInElemBottom,
  floatDiagonally,
  size,
} from "../../styles"
import { typographyCss } from "../atoms"
import { getRem } from "../../utils"
import { navbarLinks } from "../../config"
import { useFormatMessage } from "../../hooks"
import { useBannerContext } from "../../context"
import { default as mixins } from "../../styles/mixins"

const SectionS = styled.section`
  width: 100%;

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  margin-top: 0rem;
  padding: ${getRem(64)} 0 0;
  background-color: var(--headerbgcolor-color);
`

const Container2 = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: 0 ${getRem(8)};

  @media ${device.mobileL} {
    margin: 0 ${getRem(56)};
  }

  @media ${device.laptopL} {
    max-width: ${getRem(1136)};
    margin: 0 auto;
  }

  height: 100%;
`

const ContentWrapper = styled.div`
  background: transparent;
  width: 100%;
  ${mixins.displayFlex(null, null, null, "nowrap")};
  padding: 20px 0;
  position: relative;

  @media (min-width: 767px) {
    min-height: 550px;
  }

  @media (max-width: ${size.tablet}px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  ${mixins.displayFlex("column", "center")};
  padding: 100px 0 50px 0;

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    padding: 15px 0 15px 0;
  }

  @media (max-width: ${size.tablet}px) {
    width: 100%;
    order: 2;
    padding: 0 8px;
    margin-top: 20px;
  }
`

const MoreInfo = styled.div`
  font-size: ${getRem(16)};
  line-height: ${getRem(34.5)};
  font-family: Roboto, sans-serif;
  margin-top: 38px;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInElemBottom} 1000ms ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  @media (max-width: 767px) {
    margin-top: ${getRem(20)};
    font-size: ${getRem(13)};
  }
`

const TitleS = styled.h1`
  ${typographyCss};
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  font-size: ${getRem(25)};
  line-height: ${getRem(37)};
  color: var(--darkfont-color);
  margin: 0 0 ${getRem(29)} 0;
  max-width: 630px;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInElemBottom} 1000ms ease-out;
  animation-fill-mode: forwards;

  @media ${device.tablet} {
    margin-bottom: ${getRem(35)};
    font-size: ${getRem(30)};
    line-height: ${getRem(39.28)};
  }

  @media ${device.laptop} {
    font-size: ${getRem(60)};
    line-height: ${getRem(59.28)};
  }

  @media (max-width: ${size.tablet}px) {
    font-size: ${getRem(38)};
    line-height: ${getRem(37)};
    margin-bottom: ${getRem(20)};
  }
`

const TextS = styled.p`
  ${typographyCss};
  font-size: ${getRem(12)};
  line-height: ${getRem(20)};
  color: var(--darkfont-color);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  max-width: 300px;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInElemBottom} 1000ms ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;

  @media ${device.tablet} {
    line-height: ${getRem(30)};
    font-size: ${getRem(15)};
    max-width: 348px;
  }
`

const ImageWrapper = styled.div`
  ${mixins.displayFlex(null, "center")};
  width: 45%;
  position: relative;
  flex-shrink: 0;
  opacity: 0;
  animation: ${fadeIn} 1500ms ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;

  &::after {
    content: "";
    width: 56.21px;
    height: 56.21px;
    background-color: var(--cyan-color);
    border-radius: 50%;
    ${mixins.positionAbsolute(null, "15%", "9%")};
    transform: rotate(-16.97deg) translateX(0);
    animation: ${floatDiagonally} 8s ease-in-out infinite;
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    &::after {
      width: 46.21px;
      height: 46.21px;
    }
  }

  @media (max-width: ${size.tablet}px) {
    width: 100%;
    order: 1;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    &::after {
      right: 60px;
      bottom: 30px;
      width: 36.21px;
      height: 36.21px;
    }
  }

  &[data-remove="true"] {
    display: none;
  }
`

const ImgS = styled(GatsbyImage)`
  display: flex;
  align-self: center;
  width: 100%;

  @media (max-width: ${size.tablet}px) {
    width: 95%;
  }
`

const IconWrapper = styled.div`
  width: 71.8px;
  height: 71.8px;
  border-radius: 50%;
  background-color: var(--blue-color);
  ${mixins.displayFlex(null, "center", "center")};
  ${mixins.positionAbsolute("20%", "-25px")};
  box-shadow: -1.39227px 9.74587px 12.5304px rgba(80, 110, 250, 0.5);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (min-width: 769px) and (max-width: ${size.laptop}px) {
    width: 61.8px;
    height: 61.8px;
  }

  @media (max-width: 767px) {
    top: 20px;
    right: 10px;
    width: 51.8px;
    height: 51.8px;
  }
`

const LinkS = styled(Link)`
  ${typographyCss};
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: ${getRem(16)};
  font-weight: 500;
  line-height: ${getRem(34)};
  color: var(--blue-color);
  margin-left: ${getRem(21)};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: ${getRem(16)};
    background-color: var(--blue-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: ${getRem(2)};
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }

  svg {
    margin-left: ${getRem(16)};
  }
`

const StyledIcon = styled.i`
  ${mixins.displayFlex(null, "center", "center")};
  color: var(--blue-color);
  margin-left: 16px;
`
const MAX_VAL = 18
const MIN_VAL = 1

const Component = ({ imgs, title, text, icon: Icon }) => {
  const f = useFormatMessage()
  const { isBannerShow } = useBannerContext()
  const [randomInt, setRandomInt] = useState(null)

  useEffect(() => {
    const imgRandomNum = Math.floor(
      Math.random() * (MAX_VAL - MIN_VAL + 1) + MIN_VAL
    )

    setRandomInt(imgRandomNum)
  }, [])

  return useMemo(() => {
    return (
      <SectionS>
        <Container2>
          <ContentWrapper>
            <Content>
              <TitleS weight={700}>{f(title)}</TitleS>
              <TextS marginY={0}>{f(text)}</TextS>
              <MoreInfo>
                <span>{f("aboutUs.section1.moreInfo")}</span>
                <LinkS to={navbarLinks.CONTACT_US.path}>
                  {f("aboutUs.section1.contactUs")}
                  <StyledIcon className="icon-chevron-arrow" />
                </LinkS>
              </MoreInfo>
            </Content>

            <ImageWrapper data-remove={!randomInt}>
              <ImgS
                image={getImage(imgs[`sectionImage${randomInt}`])}
                alt="Human in safe"
              />

              <IconWrapper>
                <Icon />
              </IconWrapper>
            </ImageWrapper>
          </ContentWrapper>
        </Container2>
      </SectionS>
    )
  }, [isBannerShow, imgs, randomInt])
}

Component.propTypes = {
  title: types.string.isRequired,
  text: types.string.isRequired,
  icon: types.func.isRequired,
}

export const TopPageSection = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          sectionImage1: file(relativePath: { eq: "header/Property-1.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage2: file(relativePath: { eq: "header/Property-2.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage3: file(relativePath: { eq: "header/Property-3.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage4: file(relativePath: { eq: "header/Property-4.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage5: file(relativePath: { eq: "header/Property-5.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage6: file(relativePath: { eq: "header/Property-6.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage7: file(relativePath: { eq: "header/Property-7.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage8: file(relativePath: { eq: "header/Property-8.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage9: file(relativePath: { eq: "header/Property-9.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage10: file(relativePath: { eq: "header/Property-10.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage11: file(relativePath: { eq: "header/Property-11.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage12: file(relativePath: { eq: "header/Property-12.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage13: file(relativePath: { eq: "header/Property-13.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage14: file(relativePath: { eq: "header/Property-14.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage15: file(relativePath: { eq: "header/Property-15.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage16: file(relativePath: { eq: "header/Property-16.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage17: file(relativePath: { eq: "header/Property-17.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }

          sectionImage18: file(relativePath: { eq: "header/Property-18.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: NONE
                formats: [PNG]
                quality: 70
                breakpoints: [300, 400, 500]
              )
            }
          }
        }
      `}
      render={imgs => <Component imgs={imgs} {...props} />}
    />
  )
}
