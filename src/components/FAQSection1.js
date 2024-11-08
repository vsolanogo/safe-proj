import React from "react"
import styled from "styled-components"

import { Title, Text } from "."
import { theme } from "../styles"
import { device } from "../styles"
import { useBannerContext } from "../context"
import { useFormatMessage } from "../hooks"
import { getRem } from "../utils"

const SectionS = styled.div`
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

  width: ${({ maxWidth }) => maxWidth && "100%"};

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  flex-direction: column;
  justify-content: center;

  border-radius: 1.87rem;
  margin-top: 5rem;

  background-color: var(--blue-color);
  padding: 2rem 1.5rem 2.5rem 1.75rem;

  @media ${device.tablet} {
    text-align: center;
    align-items: center;
    padding: 2.1rem 4.3rem 2.6rem 4.25rem;
  }

  @media ${device.laptop} {
    padding: 3.9rem;
  }

  &[data-isbannershow="true"] {
    margin-top: 10.06rem;
  }
`

const TitleS = styled(Title)`
  line-height: 2.3rem;

  @media ${device.tablet} {
    line-height: 2.3rem;
  }
`

const TextS = styled(Text)`
  max-width: 42rem;
  font-family: "George";
  margin: 16px 0 0 0;
`

export const FAQSection1 = () => {
  const { isBannerShow } = useBannerContext()
  const f = useFormatMessage()

  return (
    <SectionS data-isbannershow={isBannerShow}>
      <TitleS color={theme.colors.white} style={{ maxWidth: "44rem" }}>
        {f("faq.section1.title")}
      </TitleS>
      <TextS color={theme.colors.white} size={20} lineHeight={24}>
        {f("faq.section1.text")}
      </TextS>
    </SectionS>
  )
}
