import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import * as types from "prop-types"
import { getRem, SanitizedHTML } from "../../utils"
import { size, device } from "../../styles"

const SectionS = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: 0 ${getRem(8)};

  @media ${device.mobileL} {
    margin: 0 ${getRem(56)};
  }

  @media ${device.laptopL} {
    max-width: ${getRem(1136)};
    margin: 0 auto;
  }

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 116px;
  min-height: 100vh;

  @media (max-width: ${size.tablet}px) {
    padding-top: 74px;
  }
`

const ContentWrapper = styled(motion.article)`
  max-width: 852px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: calc(24 / 14);
  font-weight: 400;
  color: #181930;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: "RobotoBold", sans-serif;
  }

  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: ${getRem(14)};
  }

  h1 {
    font-size: ${getRem(40)};

    @media (max-width: ${size.tablet}px) {
      font-size: ${getRem(35)};
    }
  }

  h2 {
    font-size: ${getRem(30)};

    @media (max-width: ${size.tablet}px) {
      font-size: ${getRem(25)};
    }
  }

  h3 {
    font-size: 1.17em;
  }

  a {
    text-decoration: underline;
  }
`

const TitleS = styled(SanitizedHTML)`
  padding: 0 20px;
`

const Content = styled(SanitizedHTML)`
  padding: 20px;

  @media (max-width: ${size.tablet}px) {
    padding-top: ${getRem(10)};
  }
`
export default function ContentPage({ slug }) {
  const [data, setData] = useState({})

  const { id, title, content } = data

  return (
    <SectionS>
      {Object.keys(data).length > 0 && (
        <ContentWrapper
          id={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <TitleS className="title" tagName={"h1"} html={title.rendered} />
          <Content className="content" html={content.rendered} />
        </ContentWrapper>
      )}
    </SectionS>
  )
}

ContentPage.propTypes = {
  slug: types.string.isRequired,
}
