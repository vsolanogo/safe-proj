import React from "react"
import styled, { css } from "styled-components"

export const SharedHeroSectionShiftToLeft = css`
  @media (max-width: 1800px) and (min-width: 1023px) {
    transform: translateX(-100px);
  }

  @media (max-width: 1600px) and (min-width: 1023px) {
    transform: translateX(-200px);
  }

  @media (max-width: 1400px) and (min-width: 1023px) {
    transform: translateX(-300px);
  }
`

export const SharedDivider = styled.div`
  width: 100%;
  height: ${props => (props.count ? `${props.count * 5}em` : "5em")};
  @media (max-width: 1300px) {
    height: ${props => (props.count ? `${props.count * 3.75}em` : "3.75em")};
  }
  @media (max-width: 900px) {
    height: ${props => (props.count ? `${props.count * 2.5}em` : "2.5em")};
  }

  min-height: ${props => (props.count ? `${props.count * 25}px` : "25px")};
`

export const SharedH1Nanotech = styled.h1`
  color: #181930;
  font-family: "Nanotech", Arial, sans-serif;
  font-size: 4.35em;
  font-weight: 700;
  margin: 0 auto;
  max-width: 37em;
  padding: 0 1.25em;
  text-align: center;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.37em;
  }

  @media (max-width: 40em) {
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
    font-size: 2em;
  }
`

export const TextRoboto = styled.p`
  color: #181930;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 1em;
  font-weight: 400;
  max-width: 50em;
  padding: 0 1.25em;
  text-align: initial;

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

export const SharedDottedListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const SharedDottedListLi = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-left: 1.5em;
`

export const SharedDottedListULDot = styled.div`
  width: 0.6em;
  height: 0.6em;
  left: -0.3em;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#506EFA")};
  position: absolute;
  border-radius: 100%;
  top: 0.6em;
  transform: translateY(2px);

  @media (max-width: 640px) {
    top: 0.4em;
  }
`

export const SharedDottedListULVerticalLine = styled.div`
  width: 1px;
  transform: translatex(-0.1px) translateY(2px);
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#506EFA")};
  left: 0;
  position: absolute;
  height: ${props => (props.isLast ? "0.6em" : "100%")};
  top: ${props => (props.isFirst ? "0.6em" : "0")};

  @media (max-width: 640px) {
    height: ${props => (props.isLast ? "0.6em" : "100%")};
    top: ${props => (props.isFirst ? "0.4em" : "0")};
  }
`
