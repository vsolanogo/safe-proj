import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { device, size } from "../../../../styles"
import { graphql, useStaticQuery } from "gatsby"
import { slideData } from "../../dataHelpers/sliderData"

const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media ${device.laptop} {
    display: block;
    margin: 0 auto;
    z-index: 1;
  }
  
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    z-index: 1;
  }
  
  @media (max-width: ${size.tablet}px) {
    min-height: 406px;
    max-height: 406px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ImgS = styled(Img)`
  top: 10px;
  right: -65px;
  width: 90%;
  opacity: 0;
  transform: scale(.85);
  transition: all linear .25s;
  
  &.active {
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: ${size.tablet}px) {
    width: 380px;
    top: 27px;
    right: 0;
  }
`

export const ImagesSection = ({ activeSlide }) => {
  // const images = useStaticQuery(graphql`
  //   query SliderImgsQuery {
  //     allImageSharp(
  //       filter: { fluid: { originalName: { regex: "/Slide/" } } }
  //     ) {
  //       nodes {
  //         fluid(quality: 100, ) {
  //           src
  //           sizes
  //           srcSet
  //           base64
  //           aspectRatio
  //           originalName
  //         }
  //       }
  //     }
  //   }
  // `)

  // const getImg = name => {
  //   return images.allImageSharp.nodes.find(
  //     ({ fluid }) => fluid.originalName === name
  //   )
  // }
  //
  // return (
  //   <>
  //   {slideData.map(slide => {
  //     return (
  //       <ImgWrapper
  //         key={slide.id}
  //       >
  //         <ImgS
  //           key={slide.id}
  //           className={slide.id === activeSlide.id ? 'active' : ''}
  //           fluid={getImg(slide.image).fluid}
  //           loading="eager"
  //         />
  //       </ImgWrapper>
  //     )})}
  //   </>
  // )
}