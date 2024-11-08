import React from "react"
import styled from "styled-components"
import { Text, Title } from "../../../atoms"
import { useFormatMessage } from "../../../../hooks"
import { getRem } from "../../../../utils"
import { size } from "../../../../styles"
import { motion } from "framer-motion"

const Wrapper = styled(motion.li)`
  display: flex;
  flex-direction: row;
  padding-bottom: ${getRem(26)};
  position: relative;

  .step {
    position: absolute;
    top: ${getRem(10)};
    width: ${getRem(2)};
    height: 100%;
    background-color: #9fffe9;

    @media (max-width: ${size.tablet}px) {
      left: ${getRem(24)};
    }
  }

  .count {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -${getRem(15)};
    top: ${getRem(10)};
    width: ${getRem(30)};
    height: ${getRem(30)};
    background-color: #9fffe9;
    border-radius: 50%;
    cursor: pointer;

    &.active {
      background-color: #fff;
    }

    span {
      color: #181930;
      font-weight: bold;
      font-family: "Nanotech", san-serif;
      font-size: ${getRem(20)};
      line-height: ${getRem(28)};
    }

    @media (max-width: ${size.tablet}px) {
      left: ${getRem(10)};
      top: ${getRem(5)};
    }
  }

  .content {
    padding-left: ${getRem(50)};

    @media (max-width: ${size.tablet}px) {
      padding-left: ${getRem(60)};
    }
  }
`

const TitleS = styled(Title)`
  cursor: pointer;
`

export const SlideItem = ({
  title,
  text,
  isActive,
  showStep,
  slideCount,
  onClick,
}) => {
  const f = useFormatMessage()

  return (
    <Wrapper>
      {showStep && <div className="step" />}
      <div className={`count ${isActive ? "active" : ""}`} onClick={onClick}>
        <span>{slideCount}</span>
      </div>
      <div className="content">
        <TitleS size={25} as={"h3"} onClick={onClick}>
          {f(title)}
        </TitleS>
        <Text lineHeight={21} marginY={0}>
          {f(text)}
        </Text>
      </div>
    </Wrapper>
  )
}
