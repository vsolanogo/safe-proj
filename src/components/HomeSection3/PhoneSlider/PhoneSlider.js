import React, { useEffect, useState, useCallback, useRef } from "react"
import styled from "styled-components"
import { motion, useViewportScroll } from "framer-motion"

import { getRem } from "../../../utils"
import Phone from "../../../assets/svg/phone.inline.svg"
import pattern from "../../../assets/svg/pattern.svg"
import { device } from "../../../styles"

const Wrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: ${getRem(640)};
    width: 1px;
    top: calc((100vh - 632px + 68px) / 2);
    position: sticky;
    align-self: flex-start;
    height: calc(100vh - 200px);

    ::after {
      content: "";
      position: absolute;
      width: 587px;
      height: 587px;
      left: -100px;
      background: url(${pattern}) no-repeat;
      z-index: -1;
    }
  }

  @media ${device.laptop} {
    width: ${getRem(305)};

    ::after {
      left: calc((100vw - 1050px) / 2);
    }
  }

  @media ${device.laptopL} {
    ::after {
      left: calc((100vw - 1350px) / 2);
    }
  }
`

const ImgWrapper = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    height: ${getRem(632)};
    width: ${getRem(292)};
    border-radius: 45.2696px;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    left: 7px;
    top: 4px;
  }
`

const PhoneS = styled(Phone)`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`

const Img = styled(motion.img)`
  position: absolute;
  transform-origin: 250px 2000px;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
`

export const PhoneSlider = ({ content, containerRect }) => {
  const ref = useRef({})
  const [step, setStep] = useState(0)
  const { scrollY } = useViewportScroll()
  const stepHeight = 400

  const handleChangeStep = useCallback(
    y => {
      setStep(prevStep => {
        if (y > containerRect.top) {
          const nextStepY =
            (prevStep + 1) * stepHeight + containerRect.top - 239
          const prevStepY = prevStep * stepHeight + containerRect.top - 239

          if (y > nextStepY && prevStep < content.length - 1) {
            return prevStep + 1
          }

          if (y < prevStepY) {
            return prevStep - 1
          }
        }

        return prevStep
      })
    },

    [step, setStep, containerRect]
  )

  useEffect(() => {
    scrollY.onChange(handleChangeStep)
    return () => {
      scrollY.destroy(handleChangeStep)
    }
  }, [])

  return (
    <Wrapper ref={ref}>
      <PhoneS />
      <ImgWrapper>
        {content.map(({ id, img }, index) => (
          <Img
            key={id}
            src={img}
            animate={{ rotate: (index - step) * 12 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        ))}
      </ImgWrapper>
    </Wrapper>
  )
}
