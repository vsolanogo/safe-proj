import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { getRem } from "../../../utils"
import { Pagination } from "./Pagination"
import { ContentWrapper } from "./ContentWrapper"
import { device } from "../../../styles"
import { DefaultContent } from "./VerticalSliderContent/DefaultContent"

const Wrapper = styled(motion.div)`


  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 75px;
`

const Content = styled(motion.div)`


  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 20px;

  @media ${device.tablet} {
    margin: 0;
    padding-bottom: ${getRem(300)};
    padding-left: ${getRem(120)};
    padding-top: ${getRem(86)};
  }

  @media ${device.laptop} {
    padding-top: ${getRem(86)};
    padding-left: ${getRem(86)};
  }
`

const PaginationWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    position: sticky;
    align-self: flex-start;
    top: calc((100vh - 632px + 68px + 100px) / 2);
    height: calc(100vh - 153px);
  }
`

export const VerticalSlider = ({ content, containerRect }) => {
  return (
    <Wrapper>
      <PaginationWrapper>
        {containerRect && (
          <Pagination length={content.length} containerRect={containerRect} />
        )}
      </PaginationWrapper>
      <Content>
        {/*{content.map(({ id, component: Component }, index) => (*/}
        {/*  <ContentWrapper containerRect={containerRect} key={id} index={index}>*/}
        {/*    <Component number={index} />*/}
        {/*  </ContentWrapper>*/}
        {/*))}*/}
        <ContentWrapper
          containerRect={containerRect}
          key={"1"}
          index={0}
          >
          <DefaultContent
            number={0}
            title={"home.section3.slide1.title"}
            text={"home.section3.slide1.text"}
          />
        </ContentWrapper>
        <ContentWrapper containerRect={containerRect} key={"2"} index={1}>
          <DefaultContent
            number={1}
            title={"home.section3.slide2.title"}
            text={"home.section3.slide2.text"}
          />
        </ContentWrapper>
        <ContentWrapper containerRect={containerRect} key={"3"} index={2}>
          <DefaultContent
            number={2}
            title={"home.section3.slide3.title"}
            text={"home.section3.slide3.text"}
          />
        </ContentWrapper>
        <ContentWrapper containerRect={containerRect} key={"4"} index={3}>
          <DefaultContent
            number={3}
            title={"home.section3.slide4.title"}
            text={"home.section3.slide4.text"}
          />
        </ContentWrapper>
      </Content>
    </Wrapper>
  )
}
