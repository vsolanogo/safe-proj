import React, { useEffect } from "react"
import { useFormatMessage } from "../../../../hooks"
import { getRem } from "../../../../utils"
import Icon from "../../../../assets/svg/check_icon.inline.svg"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${getRem(48)};
  background-color: #d7fff6;
  border-radius: 10px;
  color: var(--cyan-color);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: ${getRem(14)};
  line-height: ${getRem(16)};
  width: 100%;
  padding: 0 1em;
  margin-bottom: 1em;

  svg {
    margin-right: 10px;
  }
`
export const SuccessMessage = ({ isShown, setIsShown, message, delay }) => {
  const f = useFormatMessage()

  let intervalID

  useEffect(() => {
    if (isShown) {
      intervalID = setInterval(() => {
        setIsShown(false)
      }, delay || 5000)
    }

    return () => {
      clearInterval(intervalID)
    }
  }, [isShown])

  return (
    <AnimatePresence>
      {isShown && (
        <Wrapper
          key="toastr"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon />
          {f(message)}
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
