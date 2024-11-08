import React from "react"
import { Helmet } from "react-helmet"
import GeorgeLight from "../assets/fonts/GeorgeLight.woff2"
import IcoFontswoff from "../assets/fonts/iconFonts/IcoFonts.woff"
import nanotechWoffRegular from "../assets/fonts/nanotech-llc/woff2/NanotechRegular.woff2"
import nanotechWoffBold from "../assets/fonts/nanotech-llc/woff2/NanotechBold.woff2"
import { getRem } from "../utils"
import { iconsCss } from "../styles/helpers"
import { createGlobalStyle } from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const IcoFont = createGlobalStyle`
          .icon-vector-arrow {
            &:before {
              content: "\\e900";
              ${iconsCss};
            }
          }

          .icon-chevron-arrow {
            &:before {
              content: "\\e901";
              ${iconsCss};
            }
          }

          .icon-attention {
            &:before {
              content: "\\e902";
              ${iconsCss};
            }
          }

          .icon-apple {
            &:before {
              content: "\\e904";
              ${iconsCss};
            }
          }

          .icon-android {
            &:before {
              content: "\\e903";
              ${iconsCss};
            }
          }

          
          .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;

            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;

            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }

          .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
          .slick-list:focus {
          }
          .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
          }

          .slick-slider .slick-track,
          .slick-slider .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          .slick-track {
            position: relative;
            top: 0;
            left: 0;

            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .slick-track:before,
          .slick-track:after {
            display: table;

            content: "";
          }
          .slick-track:after {
            clear: both;
          }
          .slick-loading .slick-track {
            visibility: hidden;
          }

          .slick-slide {
            display: none;
            float: left;

            height: 100%;
            min-height: 1px;
          }
          [dir="rtl"] .slick-slide {
            float: right;
          }
          .slick-slide img {
            display: block;
          }
          .slick-slide.slick-loading img {
            display: none;
          }
          .slick-slide.dragging img {
            pointer-events: none;
          }
          .slick-initialized .slick-slide {
            display: block;
          }
          .slick-loading .slick-slide {
            visibility: hidden;
          }
          .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
          }
          .slick-arrow.slick-hidden {
            display: none;
          }

          @media (max-width: 640px) {
            body {
              overflow-x: hidden !important;
            }
          }

          body {
            background-color: #fff;
            margin: 0;
            padding: 0;
            max-width: 100vw;
            width: 100vw;
          }

          html {
            font-family: Roboto, sans-serif;
            color: var(--darkfont-color);
            padding: unset;
            margin: unset;

            --blue-color: #506efa;
            --blouetwo-color: #516ffa;
            --white-color: #fff;
            --red-color: #ff0f0f;
            --reddarken-color: #f10710;
            --darkfont-color: #181930;
            --buttonhovergray-color: #3a3b58;
            --buttonhoverblue-color: #7890ff;
            --grayfont-color: #818c99;
            --black-color: #000;
            --cyan-color: #4be8c5;
            --borderbutton-color: #353535;
            --borderlight-color: #e4e4e4;
            --dropdownitemhoverbg-color: #f1f0f0;
            --dotscolor-color: #22312e;
            --brightgreen-color: #4dedc9;
            --cardbgcolor-color: #131313;
            --blackshadow-color: rgba(0, 0, 0, 0.15);
            --blueshadow-color: rgba(80, 110, 250, 0.5);
            --bluetransparentshadow-color: rgba(80, 110, 250, 0);
            --greyshadow-color: rgba(24, 25, 48, 0.5);
            --greytransparentshadow-color: rgba(24, 25, 48, 0);
            --cardshadow-color: rgba(41, 41, 42, 0.07);
            --iconshadow-color: rgba(255, 15, 15, 0.3);
            --checkappbg-color: #f2f2f2;
            --gray-color: #666666;
            --stepperline-color: #e4e4e4;
            --stepperfontcolor-color: #818c99;
            --timingbg-color: #eaf0ff;
            --mainblack-color: #101010;
            --headerbgcolor-color: #fafbfc;
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            outline: none;
          }

          a {
            text-decoration: none;
            cursor: pointer;
            color: var(--darkfont-color);
          }

          textarea {
            resize: none;
          }

          button {
            cursor: pointer;
          }

          a,
          p,
          button,
          span,
          label,
          div {
            font-size: ${getRem(14)};
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          // icon fonts
          i[class^="icon-"] {
            font-style: normal;
          }
          
`

const Component = ({ data }) => {
  return (
    <>
      <IcoFont />
      <Helmet>
        <style type="text/css">
          {`

        @font-face {
          font-family: "IcoFonts";
          src: url("${IcoFontswoff}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: block;
        }


           @font-face {
            font-family: Nanotech;
            src: url("${nanotechWoffRegular}") format("woff2");
          }

          @font-face {
            font-family: Nanotech;
            src: url("${nanotechWoffBold}") format("woff2");
            font-weight: bold;
          }

          @font-face {
            font-family: George;
            src: url("${GeorgeLight}") format("woff2");
            font-display: swap;
          }



          `}
        </style>
      </Helmet>
    </>
  )
}

export const GlobalComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        fontIconWoff: file(relativePath: { eq: "iconFonts/IcoFonts.woff" }) {
          id
          name
          relativePath
          publicURL
        }

        fontIconSvg: file(relativePath: { eq: "iconFonts/IcoFonts.svg" }) {
          id
          name
          relativePath
          publicURL
        }

        fontIconWoff2: file(relativePath: { eq: "iconFonts/IcoFonts.woff2" }) {
          id
          name
          relativePath
          publicURL
        }

        fontIconTtf: file(relativePath: { eq: "iconFonts/IcoFonts.woff" }) {
          id
          name
          relativePath
          publicURL
        }
      }
    `}
    render={data => <Component data={data} />}
  />
)
