import React from "react"
import styled, { css } from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImgWrapper2Animation } from "../animationKeyFrames/animationKeyFrames"

const SCanvasButtonGlowWrapper = styled.div`
  width: 10em;
  height: 7em;
  z-index: 1160;
  position: absolute;
  filter: opacity(0);
  animation-play-state: paused;
  animation-name: ${ImgWrapper2Animation};
  transform: translateY(-0.88em);
  animation-fill-mode: forwards;
  animation-direction: linear;
  animation-duration: 3000ms;
  animation-delay: 1000ms;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const SCanvasButtonShadowWrapper = styled.div`
  height: 8.4em;
  width: 15em;
  z-index: 1130;
  position: absolute;
  filter: opacity(0);
  transform: translateY(-0.55em) scale(0.4);
  transition: all 0.6s linear;

  &[data-runanim="true"] {
    filter: opacity(1);
    transform: translateY(-0.55em) scale(1);
  }
`

const ButtonGlow = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  @media (max-width: 1183px) {
    transform: scale(0.65);
  }
`

const ButtonShadow = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 100%;
  @media (max-width: 1183px) {
    transform: scale(0.65);
  }
`
const Component = ({ imgs, hideSplash }) => {
  return (
    <>
      <SCanvasButtonGlowWrapper data-runanim={hideSplash}>
        <ButtonGlow image={getImage(imgs.canvasButtonGlow)} alt="Button Glow" />
      </SCanvasButtonGlowWrapper>

      <SCanvasButtonShadowWrapper data-runanim={hideSplash}>
        <ButtonShadow
          image={getImage(imgs.canvasButtonShadow)}
          alt="Button Shadow"
          id="ehre1"
        />
      </SCanvasButtonShadowWrapper>
    </>
  )
}

const ComponentWrapper = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          canvasButtonShadow: file(
            relativePath: { eq: "canvas-button-shadow.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: NONE
                formats: [PNG]
                quality: 100
              )
            }
          }

          canvasButtonGlow: file(
            relativePath: { eq: "canvas-button-glow.png" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: NONE
                formats: [PNG]
                quality: 100
              )
            }
          }
        }
      `}
      render={imgs => <Component imgs={imgs} {...props} />}
    />
  )
}

export const ButtonGifBgImages = React.memo(
  ({ hideSplash }) => <ComponentWrapper hideSplash={hideSplash} />,
  (prev, next) => prev.hideSplash === next.hideSplash
)
