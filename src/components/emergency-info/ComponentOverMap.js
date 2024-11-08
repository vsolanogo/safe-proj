import React, { useReducer, useEffect } from "react"
import styled, { css } from "styled-components"
import { SharedDivider, SharedH1Nanotech, TextRoboto } from "../shared"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import BatterySVG from "../../assets/svg/battery.svg"

const SWrapper = styled.section`
  background: #fff;
  box-shadow: 27px 38px 77px rgba(0, 0, 0, 0.1);
  border-radius: 0.65em;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20%;
  top: -25%;
  z-index: 10;
  padding: 1em 3em 1em 1em;

  @media (max-width: 1500px) {
    left: 5em;
    top: -5em;
  }

  @media (max-width: 1400px) {
    left: 2em;
    top: -5em;
  }

  @media (max-width: 1300px) {
    left: -2em;
    top: -5em;
  }

  @media (max-width: 1100px) {
    left: 18em;
    top: -3em;
    font-size: 1.2em;
  }
  @media (max-width: 1000px) {
    left: 18em;
    top: -3em;
    font-size: 1.1em;
  }
  @media (max-width: 950px) {
    font-size: 1em;
  }
  @media (max-width: 900px) {
    font-size: 0.9em;
  }

  @media (max-width: 800px) {
    font-size: 0.8em;
  }

  @media (max-width: 750px) {
    top: -2em;
    left: 16em;
  }

  @media (max-width: 700px) {
    left: 13em;
  }
  @media (max-width: 650px) {
    left: 8em;
  }
  @media (max-width: 600px) {
    left: 4em;
    top: -2em;
  }

  @media (max-width: 550px) {
    left: 0em;
    top: -3em;
  }

  @media (max-width: 500px) {
    top: -3em;
    font-size: 0.75em;
  }

  @media (max-width: 450px) {
    font-size: 0.7em;
  }

  @media (max-width: 400px) {
    font-size: 0.65em;
  }

  @media (max-width: 350px) {
    font-size: 0.6m;
  }

  @media (max-width: 300px) {
    font-size: 0.55em;
  }
`

export const TextInter = styled.p`
  color: #101010;
  font-family: "Inter", Arial, sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  padding: 0;
  text-align: initial;
  margin: 0;
  line-height: 1;
  cursor: default;
`

const Component = ({ imgs }) => {
  return (
    <>
      <SWrapper>
        <div
          css={`
            display: flex;
            align-items: center;
            font-size: inherit;
          `}
        >
          <GatsbyImage
            image={getImage(imgs.alice)}
            css={`
              border-radius: 100%;
              max-width: 3em;
              max-height: 3em;
              margin-right: 1em;
              font-size: inherit;
            `}
            objectFit="contain"
          />

          <div
            css={`
              display: flex;
              flex-direction: row;
              position: relative;
              font-size: inherit;
            `}
          >
            <div
              css={`
                display: flex;
                flex-direction: column;
                font-size: inherit;
              `}
            >
              <TextInter
                css={`
                  font-weight: 700;
                  font-size: 0.9em;
                `}
              >
                Alice Johansson
              </TextInter>
              <TextInter
                css={`
                  color: #818c99;
                  margin-top: 0.33em;
                `}
              >
                Nuvarande batterinivå:
              </TextInter>
            </div>

            <div
              css={`
                display: flex;
                align-items: center;
                margin-left: 0.4em;
                align-self: flex-end;
                font-size: inherit;
              `}
            >
              <img
                src={BatterySVG}
                css={`
                  max-width: 1.3em;
                  margin-right: 0.3em;
                `}
              />
              <TextInter
                css={`
                  font-weight: 700;
                  font-size: 0.9em;
                `}
              >
                85%
              </TextInter>
            </div>
          </div>
        </div>

        <div
          css={`
            display: flex;
            margin-top: 0.8em;
            margin-left: 0.2em;
            font-size: inherit;
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: column;
              margin-right: 0.8em;
              font-size: inherit;
            `}
          >
            <TextInter
              css={`
                color: var(--blue-color);
                font-size: 0.8em;
                line-height: 1.4;
                font-weight: 500;
              `}
            >
              Live position
            </TextInter>
            <TextInter
              css={`
                color: #818c99;
                font-size: 0.7em;
                line-height: 1.4;
              `}
            >
              Uppdaterad 7 sek sedan
            </TextInter>
          </div>

          <TextInter
            css={`
              color: #333;
              font-size: 0.8em;
              font-weight: 400;
              max-width: 13em;
              line-height: 1.4;
            `}
          >
            Östra Järnvägsgatan 37 <br /> 111 20 Stockholm
          </TextInter>
        </div>
      </SWrapper>
    </>
  )
}

export const ComponentOverMap = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          alice: file(relativePath: { eq: "emergency/Alice.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                width: 100
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
