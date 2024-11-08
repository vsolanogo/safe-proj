import React from "react"
import styled from "styled-components"

import { Title, Text } from "."
import { getRem } from "../utils"
import { theme } from "../styles"
import { device } from "../styles"
import { useBannerContext } from "../context"
import { useFormatMessage } from "../hooks"

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

  border-radius: ${getRem(30)};
  margin-top: 5.06rem;

  background-color: var(--blue-color);
  padding: ${getRem(32)} ${getRem(24)} ${getRem(40)} ${getRem(28)};

  @media ${device.tablet} {
    text-align: center;
    align-items: center;
    padding: ${getRem(34)} ${getRem(68)} ${getRem(42)} ${getRem(68)};
  }

  @media ${device.laptop} {
    padding: ${getRem(68)};
  }

  &[data-isbannershow="true"] {
    margin-top: 10.06rem;
  }
`

const TitleS = styled(Title)`
  line-height: ${getRem(37)};

  @media ${device.tablet} {
    line-height: ${getRem(48)};
    margin-bottom: ${getRem(7)};
  }

  @media ${device.laptop} {
    margin: ${getRem(3)} 0;
  }
`

export const ProductSection1 = () => {
  const { isBannerShow } = useBannerContext()
  const f = useFormatMessage()

  return (
    <SectionS data-isbannershow={isBannerShow}>
      <TitleS color={theme.colors.white} style={{ maxWidth: getRem(709) }}>
        {f("product.section1.title")}
      </TitleS>
      <Text
        color={theme.colors.white}
        size={20}
        lineHeight={24}
        style={{ maxWidth: getRem(675), fontFamily: "George" }}
      >
        {f("product.section1.text")}
      </Text>
    </SectionS>
  )
}
