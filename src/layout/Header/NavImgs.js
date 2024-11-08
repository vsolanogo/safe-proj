import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { device } from "../../styles"

const ImgWrapper = styled.div`
  display: block;
  position: fixed;
  right: 0;
  z-index: 99991;
  top: 50%;
  transition: transform 1.5s linear;
  transition-delay: unset;
  transform: translateY(-50%) translateX(130vw) rotate(120deg);
  @media ${device.tablet} {
    transform: translateY(-50%) translateX(130vw) rotate(120deg) scale(1.7);
  }

  &[data-isopen="true"] {
    @media ${device.tablet} {
      transform: translateY(-50%) translateX(55px) rotate(0deg) scale(1.7);
    }

    transform: translateY(-50%) translateX(130px) rotate(0deg);
    transition-delay: 0.2s;
  }
`

const ImgGlowWrapper = styled(ImgWrapper)`
  right: 0;
  position: fixed;
  z-index: 99990;
  top: 50%;
  transition: transform 1.5s linear;
  transition-delay: unset;
  transform: translateY(-50%) translateX(130vw);

  @media ${device.tablet} {
    transform: translateY(-50%) translateX(130vw) scale(1.7);
  }

  &[data-isopen="true"] {
    @media ${device.tablet} {
      transform: translateY(-50%) translateX(-55px) scale(1.7);
    }

    transition-delay: 0.3s;
    transform: translateY(-50%) translateX(50px);
  }
`

const Component = ({ isOpen, imgs }) => {
  return (
    <>
      <ImgGlowWrapper data-isopen={isOpen}>
        <GatsbyImage image={getImage(imgs.buttonGlow)} alt="image of button" />
      </ImgGlowWrapper>

      <ImgWrapper data-isopen={isOpen}>
        <GatsbyImage image={getImage(imgs.btnImg)} alt="image of button" />
      </ImgWrapper>
    </>
  )
}

export const NavImgs = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          btnImg: file(relativePath: { eq: "slider/button-image.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                width: 270
                placeholder: NONE
                formats: [PNG]
                quality: 70
              )
            }
          }
          buttonGlow: file(relativePath: { eq: "nav-button-mobile-glow.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                width: 270
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
