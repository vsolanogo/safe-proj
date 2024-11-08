import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-intl"
import { getRem } from "../utils"
import { Title, Text, typographyCss } from "./"
import { useFormatMessage } from "../hooks"
import { theme } from "../styles"
import { device } from "../styles"
import { useBannerContext } from "../context"

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

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  margin-top: 0;
  padding: 5.06rem 0 0;

  &[data-isbannershow="true"] {
    margin-top: 10.06rem;
  }
`

const ContentWrapper = styled.div`
  background: var(--blue-color);
  border-radius: 1.875rem;
  overflow: hidden;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 47%;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 40%;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.375rem 0.5rem 2.5rem 1.6875rem;

  @media ${device.tablet} {
    padding: 4.5rem 0.9375rem 4.125rem 2.1875rem;
  }

  @media ${device.laptop} {
    padding: 4.5rem 2.5rem 4.125rem 6rem;
  }
`

const MoreInfo = styled.div``

const TextS = styled(Text)``

const LinkS = styled(Link)`
  ${typographyCss}
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  margin-left: 1.31rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    border-radius: 1rem;
    background-color: var(--white-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease-in-out;
    left: 0;
    width: 100%;
    height: 0.125rem;
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }

  svg {
    margin-left: 1rem;
  }
`

const ImgS = styled(Img)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`

const TitleS = styled(Title)`
  font-size: 25px;
  line-height: 37px;
  color: var(--white-color);
  margin-bottom: 1.81rem;

  @media ${device.tablet} {
    margin-bottom: 2.19rem;
  }

  @media ${device.laptop} {
    font-size: 30px;
    line-height: 44.4px;
  }
`

export const AboutUsSection1 = () => {
  const f = useFormatMessage()
  const { isBannerShow } = useBannerContext()

  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "about-us-section1.png" }) {
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
    <SectionS data-isbannershow={isBannerShow}>
      <ContentWrapper>
        <Content>
          <TitleS>{f("aboutUs.section1.title")}</TitleS>
          <MoreInfo>
            <TextS
              size={16}
              lineHeight={34}
              marginY={0}
              color={theme.colors.borderLight}
              as="span"
            >
              {f("aboutUs.section1.moreInfo")}
            </TextS>
            {/*<LinkS*/}
            {/*  marginY={0}*/}
            {/*  size={16}*/}
            {/*  lineHeight={34}*/}
            {/*  color={theme.colors.white}*/}
            {/*  to={navbarLinks.CONTACT_US.path}*/}
            {/*>*/}
            {/*  {f("aboutUs.section1.contactUs")} <Arrow />*/}
            {/*</LinkS>*/}
          </MoreInfo>
        </Content>

        <ImgS
          imgStyle={{ objectPosition: "left center" }}
          fluid={data.file.childImageSharp.fluid}
          alt="Human in safe"
        />
      </ContentWrapper>
    </SectionS>
  )
}
