import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FAQItem } from "./FAQItem"
import { Loader } from "../Loader/Loader"
import { default as mixins } from "../../styles/mixins"
import { device } from "../../styles"
import { getRem } from "../../utils"

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

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  padding: 40px 0;
  transition: all 0.5s linear;
`

const StyledError = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 600;
  ${mixins.displayFlex(null, "center", "center")};
  color: var(--reddarken-color);
`

export const FAQs = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <SectionS>
      {isLoading && <Loader />}
      {data.length > 0 &&
        !isLoading &&
        data.map(({ id, ...rest }) => <FAQItem key={id} {...rest} />)}
      {showError && (
        <StyledError>Something went wrong while loading faq posts.</StyledError>
      )}
    </SectionS>
  )
}
