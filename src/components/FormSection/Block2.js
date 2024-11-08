import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { getRem } from "../../utils"
import { blockCss } from "./helpers"
import pattern from "../../assets/svg/line-pattern.svg"
import phone from "../../assets/svg/phone.svg"
import { Title, Button } from "../"
import { device } from "../../styles"
import { useFormatMessage } from "../../hooks"

const Wrapper = styled.div`
  ${blockCss}
  padding: ${getRem(29)} ${getRem(23)} ${getRem(32)} ${getRem(30)};
  background: var(--cyan-color);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  grid-row-gap: ${getRem(15)};
  align-items: center;
  overflow: hidden;

  @media ${device.tablet} {
    padding: ${getRem(23)} ${getRem(30)} 0 ${getRem(38)};
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: ${getRem(63)};
    grid-row-gap: ${getRem(54)};
    background-image: url(${pattern});
    background-repeat: no-repeat;
    background-position: right ${getRem(25)};
  }
`

const PhoneScreen = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-column-end: 2;

    background-image: url(${phone});
    background-repeat: no-repeat;
    background-position: top;
    background-size: ${getRem(195)} auto;

    height: ${getRem(237)};
    width: ${getRem(194)};
    position: relative;
  }
`

const ImgWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    height: ${getRem(235)};
    width: ${getRem(186)};
    position: absolute;
    border-radius: ${getRem(27.8332)} ${getRem(27.8332)} 0 0;
    bottom: 0;
    left: ${getRem(4)};
    overflow: hidden;
  }
`

export const Block2 = () => {
  const f = useFormatMessage()
  const data = useStaticQuery(graphql`
    query halfPhoneScreen {
      file(relativePath: { eq: "half-phone-screen.png" }) {
        id
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Title as="h2" lineHeight={41}>
        {f("formSection.block2.title")}
      </Title>
      <Button
        style={{ alignSelf: "self-start" }}
        as="a"
        type="gray"
        width={142}
        height={48}
      >
        {f("formSection.block2.button")}
      </Button>
      <PhoneScreen>
        <ImgWrapper>
          <Img fluid={data.file.childImageSharp.fluid} alt="Phone screen" />
        </ImgWrapper>
      </PhoneScreen>
    </Wrapper>
  )
}
