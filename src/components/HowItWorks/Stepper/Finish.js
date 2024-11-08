import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { TextS, TitleS } from "./styles"
import { useCheckIsEnd } from "./useCheckIsEnd"
import { useFormatMessage } from "../../../hooks"

const Wrapper = styled(motion.div)`


  margin-top: 61px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 280px;
`

export const Finish = ({ height, startScrollY }) => {
  const isEnded = useCheckIsEnd(height, startScrollY)
  const f = useFormatMessage()

  return (
    <Wrapper
      transition={{ ease: "easeOut", duration: 1.2 }}
      animate={isEnded && "end"}
      initial={{ y: 20, opacity: 0 }}
      variants={{
        end: { opacity: 1, y: 0 },
      }}
    >
      <TitleS>{f("product.howItWork.finish.title")}</TitleS>
      <TextS style={{ maxWidth: 409, textAlign: "center" }}>
        {f("product.howItWork.finish.text")}
      </TextS>
    </Wrapper>
  )
}
