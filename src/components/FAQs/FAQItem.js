import React, { useCallback, useState } from "react"
import Collapsible from "react-collapsible"
import * as types from "prop-types"
import styled from "styled-components"

import { Text, Title } from "../atoms"
import { Toggle } from "./Toggle"
import { default as mixins } from "../../styles/mixins"

const CollapsibleWrapper = styled.div`
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);
  background-color: var(--white-color);
  border-radius: 10px;
  ${mixins.displayFlex("column")};
  cursor: pointer;
  transition: all 0.2s linear;
`

const StyledTitle = styled(Title)`
  margin: 0;
  font-family: Roboto, sans-serif;
`

const Excerpt = styled(Text)`
  margin: 4px 0 0 0;
  opacity: 0.5;
`

const StyledText = styled(Text)`
  margin: 17px 0 0 0;
  height: auto;
  overflow: hidden;
  transition: transform 0.2s linear;
  padding: 0 24px 19px 35px;
`

const TriggerWrapper = styled.div`
  ${mixins.displayFlex(null, "space-between", "center")};
  padding: 18px 24px 19px 35px;
`

export const FAQItem = ({ title, question, answer }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = useCallback(() => setOpen(prevVal => !prevVal), [])

  return (
    <CollapsibleWrapper>
      <Collapsible
        easing={"ease-out"}
        handleTriggerClick={toggleOpen}
        open={isOpen}
        trigger={
          <TriggerWrapper>
            <div>
              <StyledTitle
                as="h2"
                weight={700}
                size={16}
                lineHeight={19}
                trigger="Start here"
              >
                {title}
              </StyledTitle>
              <Excerpt weight={400} size={14} lineHeight={20}>
                {question}
              </Excerpt>
            </div>
            <Toggle isOpen={isOpen} />
          </TriggerWrapper>
        }
      >
        <StyledText
          size={14}
          lineHeight={20}
          isOpen={isOpen}
          onClick={toggleOpen}
        >
          {answer}
        </StyledText>
      </Collapsible>
    </CollapsibleWrapper>
  )
}

FAQItem.propTypes = {
  title: types.string.isRequired,
  question: types.string.isRequired,
  answer: types.string.isRequired,
}
