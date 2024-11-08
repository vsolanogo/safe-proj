import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import * as types from "prop-types"
import styled, { keyframes, css } from "styled-components"
import { default as mixins } from "../../../../styles/mixins"

const buttonAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-400px) rotate(-280.59deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(-50deg);
  }
`

const shadowAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-400px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const ImageWrapper = styled.div`
  width: 480px;
  height: 480px;
  border-radius: 50%;
  ${mixins.positionAbsolute("38px", 0, 0, "38px")};
  opacity: 0;
  transform: translateX(-400px) rotate(-280.59deg);
  animation-play-state: paused;
  animation: ${buttonAnim};
  will-change: transform, opacity;
  animation-fill-mode: forwards;
  animation-duration: 900ms;
  animation-direction: ease-out;
  animation-delay: 500ms;
  z-index: 300;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`
const BoxShadow = styled.div`
  width: 478px;
  height: 478px;
  border-radius: 50%;
  ${mixins.positionAbsolute("38px", 0, 0, "40px")};
  box-shadow: -2px 15px 45px rgb(0 0 0 / 15%);
  overflow: hidden;
  opacity: 0;
  transform: translateX(-400px);
  animation-play-state: paused;
  animation: ${shadowAnim};
  will-change: transform, opacity;
  animation-fill-mode: forwards;
  animation-duration: 900ms;
  animation-direction: ease-out;
  animation-delay: 500ms;
  z-index: 300;

  &[data-runanim="true"] {
    animation-play-state: running;
  }
`

const SAnimatedDivWrapper = styled.div`
  will-change: transform;
  transition: transform 0.3s ease-out;
  transform: ${({ buttonImageRotation }) =>
    `rotate(${buttonImageRotation}deg)`};
`

export const ButtonImageComponent = React.memo(
  ({ inView, animationsSequence, buttonImageRotation }) => {
    return (
      <>
        <ImageWrapper
          data-runanim={inView}
          onAnimationEnd={() => animationsSequence()}
        >
          <SAnimatedDivWrapper buttonImageRotation={buttonImageRotation}>
            <ButtonComponent />
          </SAnimatedDivWrapper>
        </ImageWrapper>
        <BoxShadow data-runanim={inView} />
      </>
    )
  },

  (prev, next) =>
    prev.inView === next.inView &&
    prev.buttonImageRotation === next.buttonImageRotation
)

ButtonImageComponent.propTypes = {
  inView: types.bool.isRequired,
  animationsSequence: types.func.isRequired,
}

const Button = ({ image }) => (
  <Img fixed={image.buttonImage.childImageSharp.fixed} alt="Button image" />
)

Button.propTypes = {
  image: types.object.isRequired,
}

const ButtonComponent = props => (
  <StaticQuery
    query={graphql`
      query {
        buttonImage: file(relativePath: { eq: "slider/button-image.png" }) {
          childImageSharp {
            fixed(
              quality: 70
              width: 480
              pngCompressionSpeed: 1
              height: 480
            ) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={image => <Button image={image} {...props} />}
  />
)
