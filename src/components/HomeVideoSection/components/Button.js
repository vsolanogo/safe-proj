import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as types from "prop-types"

import { theme } from "../../../styles"

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: var(--white-color);
  border-radius: 50%;
  box-shadow: 5px 31px 63px rgba(0, 0, 0, 0.15);
`

const ImageWrapper = styled(motion.div)``

export const SlideButton = React.forwardRef(
  ({ animation, ...restProps }, ref) => (
    <Container ref={ref} {...restProps}>
      <ButtonComponent />
    </Container>
  )
)

const Button = ({ image }) => (
  <ImageWrapper>
    <Img fluid={image.buttonImg.childImageSharp.fluid} alt="SoSafe button" />
  </ImageWrapper>
)

Button.propTypes = {
  image: types.object.isRequired,
}

const ButtonComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        buttonImg: file(relativePath: { eq: "slider/button-image.png" }) {
          childImageSharp {
            fluid(pngCompressionSpeed: 1, maxWidth: 378, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={image => <Button image={image} />}
  />
)
