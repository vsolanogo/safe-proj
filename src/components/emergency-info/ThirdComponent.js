import React from "react"
import styled, { css } from "styled-components"
import { SharedDivider, SharedH1Nanotech } from "../shared"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { AlarmEmergencyMessage } from "../HomeSliderSection/components/ImageCards/AlarmEmergencyMessage"
import { useFormatMessage } from "../../hooks"
import { useIntl } from "gatsby-plugin-intl"

const SWrapper = styled.section`
  align-items: center;
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 3em;
  grid-template-columns: 10fr 5fr;
  justify-items: center;
  margin: auto;
  max-width: 108em;
  padding: 0 2em;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const STextRoboto2 = styled.section`
  color: #181930;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 1em;
  text-align: initial;
  padding: 0 0.3em;
  margin: 1.5em 0 1em 0;
  font-weight: 300;
  max-width: 31em;
  line-height: 1.8;

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }

  &[data-dontdisplay="true"] {
    display: none;
  }
`

const Component = ({ imgs }) => {
  const f = useFormatMessage()
  const intl = useIntl()
  return (
    <>
      <SWrapper>
        <div
          css={`
            @media (max-width: 1350px) {
              margin-left: 0;
            }
          `}
        >
          <SharedH1Nanotech
            css={`
              text-align: initial;
              padding: 0;
            `}
          >
            <span
              css={`
                all: inherit;
                font-weight: 300;
              `}
            >
              {f("emergencyInfo.thirdComponent.h1")}
            </span>{" "}
            {f("emergencyInfo.thirdComponent.h2")}
          </SharedH1Nanotech>

          <STextRoboto2 data-dontdisplay={intl && intl.locale === "en"}>
            När situationen kräver ett nödanrop är du bara ett knapptryck bort.
            En{" "}
            <b
              css={`
                font-weight: 600;
              `}
            >
              nödlänk
            </b>{" "}
            skickas till dig som trygghetskontakt och larmcentralen, om att
            personen behöver er hjälp.
          </STextRoboto2>

          <STextRoboto2 data-dontdisplay={intl && intl.locale === "sv"}>
            When the situation demands a emergency call, you are only a touch of
            a button away. An emergency link is sent to you as emergency contact
            and emergency center, that the person needs help.
          </STextRoboto2>

          <STextRoboto2>{f("emergencyInfo.thirdComponent.h4")}</STextRoboto2>
        </div>
        <div
          css={`
            position: relative;
            @media (max-width: 700px) {
              max-width: 22em;
              margin-left: 5em;
            }
          `}
        >
          <div
            css={`
              position: absolute;
              z-index: 10;
              top: 23%;
              left: -10%;
              max-width: 22em;
            `}
          >
            <AlarmEmergencyMessage />
          </div>
          <GatsbyImage
            image={getImage(imgs.phone)}
            css={`
              max-width: 100%;
            `}
            objectFit="contain"
          />
        </div>
        <SharedDivider />
      </SWrapper>
    </>
  )
}

export const ThirdComponent = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          phone: file(relativePath: { eq: "slider/slide-screen2.png" }) {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
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
