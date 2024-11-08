import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Title, Button, Text } from ".."
import { device } from "../../styles"
import { getRem } from "../../utils"

const SectionS = styled.section`
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

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  display: grid;
  height: calc(100vh - 46px);
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr 1fr;

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr auto;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`

const ImgS = styled(Img)`
  align-self: flex-end;

  @media ${device.tablet} {
    align-self: center;
    width: 700px;
    right: 10%;
  }

  @media ${device.laptop} {
    position: static;
    right: inherit;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 251px;
  position: relative;
  align-self: flex-start;

  @media ${device.tablet} {
    left: -55%;
    align-self: center;
  }

  @media ${device.laptop} {
    left: inherit;
    right: 80px;
  }
`

const TitleS = styled(Title)`
  font-weight: bold;
  font-size: 45px;
  line-height: 62px;
  color: var(--blue-color);

  @media ${device.tablet} {
    line-height: 149.405px;
    font-size: 149.405px;
  }
`

const TextS = styled(Text)`
  font-size: 15px;
  line-height: 18px;
  position: relative;
  top: -5px;

  @media ${device.tablet} {
    top: -25px;
  }
`

export const NotFound = () => {
  const data = useStaticQuery(graphql`
    query NotFoundQuery {
      file(relativePath: { eq: "404.png" }) {
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
    <SectionS>
      <ImgS fluid={data.file.childImageSharp.fluid} alt="Not found image" />
      <Content>
        <TitleS align="center">404</TitleS>
        <TextS marginY={0}> Page not found</TextS>
        <Button
          height={48}
          width={170}
          marginY={10}
          as={Link}
          to="/"
          type="blue"
        >
          Back to home page
        </Button>
      </Content>
    </SectionS>
  )
}
