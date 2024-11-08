import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Title, TextP } from ".."
import { getRem } from "../../utils"
import { device } from "../../styles"
import { useFormatMessage } from "../../hooks"

const Wrapper = styled.div`
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: ${getRem(8)};
  padding: ${getRem(36)} ${getRem(24)} ${getRem(39)} ${getRem(16)};

  display: grid;
  grid-template-rows: 1fr min-content ${getRem(144)} min-content;
  align-items: center;

  @media ${device.laptop} {
    width: ${getRem(476)};
    height: ${getRem(376)};
    padding: ${getRem(29)} ${getRem(62)} ${getRem(23)} ${getRem(46)};
    margin: ${getRem(25)} ${getRem(8)};
  }
`

const Logo = styled.img`
  margin-bottom: ${getRem(24)};
`

const TextS = styled(TextP)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const ReadMore = styled.a`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${getRem(142)};
  padding: ${getRem(16)};
  border: 1px solid var(--borderlight-color);
  border-radius: ${getRem(10)};
  transition: border 0.3s ease-in-out;
  margin-top: ${getRem(11)};

  &:hover {
    border: 1px solid var(--blue-color);
  }
`

export const CardWithMedia = ({ title, logo, text, link }) => {
  const f = useFormatMessage()

  return (
    <Wrapper>
      <Logo src={logo} alt="media logo" />
      <Title as="h3" size={20} lineHeight={26}>
        {f(title)}
      </Title>
      <TextS marginY={16} lineHeight={28}>
        {f(text)}
      </TextS>
      <ReadMore href={link}>
        {f("aboutUs.section3.cardWithMedia.button")}
      </ReadMore>
    </Wrapper>
  )
}
