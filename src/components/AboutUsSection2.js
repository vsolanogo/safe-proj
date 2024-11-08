import React from "react"
import styled from "styled-components"

import { Title, Text } from "."
import { device } from "../styles"
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

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  display: grid;
  grid-template-rows: auto auto;
  row-gap: 2.19rem;
  padding-top: 2rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    padding-top: 2.6rem;
    grid-template-columns: 1fr 1fr;
  }
`

const MainContentWrapper = styled.div`
  @media ${device.tablet} {
    border-right: 1px solid var(--borderlight-color);
    padding-right: 1.25rem;
  }

  @media ${device.laptop} {
    margin-left: 6rem;
  }
`

const Label = styled(Text)`
  color: var(--blue-color);
  text-transform: uppercase;
  margin-top: 0.62rem;
  margin-bottom: 1.3rem;
`

const DescriptionWrapper = styled.div`
  @media ${device.tablet} {
    margin-left: 1rem;
  }

  @media ${device.laptop} {
    margin-left: 4.5rem;
  }
`

const TitleS = styled(Title)`
  line-height: 37px;
  font-size: 25px;

  @media ${device.laptop} {
    line-height: 51.8px;
    font-size: 35px;
  }
`

const TextS = styled(Text)`
  font-size: 0.93rem;
  line-height: 1.87rem;
  margin-top: 0.81rem;
  margin-bottom: 2rem;
`

export const AboutUsSection2 = () => {
  const f = useFormatMessage()
  return (
    <SectionS>
      <MainContentWrapper>
        <Label weight="bold" size={15} lineHeight={22.2}>
          {f("aboutUs.section2.label")}
        </Label>
        <TitleS>{f("aboutUs.section2.title")}</TitleS>
      </MainContentWrapper>
      <DescriptionWrapper>
        <TextS>{f("aboutUs.section2.content.p1")}</TextS>
        {/*<TextS>{f("aboutUs.section2.content.p2")}</TextS>*/}

        {/*<Button*/}
        {/*  style={{ marginTop: 1.87rem }}*/}
        {/*  width={144}*/}
        {/*  height={48}*/}
        {/*  as="a"*/}
        {/*  href="#"*/}
        {/*  type="blue"*/}
        {/*>*/}
        {/*  {f("aboutUs.section2.button")}*/}
        {/*</Button>*/}
      </DescriptionWrapper>
    </SectionS>
  )
}
